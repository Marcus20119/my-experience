import {
  Currency,
  useGetBusinessConfigQuery,
  useGetBusinessMeQuery,
  useGetWhiteLabelConfigQuery,
} from '@/shared/api/private/schemas';
import { COLOR } from '@/shared/assets/styles/constants';
import { CURRENCY_SYMBOL } from '@/shared/constants';
import { useBusinessStore } from '@/shared/stores/businessStore';
import { ApolloService } from '@/shared/types';
import { ThemeTool } from '@/shared/utils';
import { useEffect } from 'react';

export const useConfigBusiness = () => {
  const { setBusinessStates, businessThumbnail, businessName } =
    useBusinessStore();

  useGetBusinessConfigQuery({
    context: {
      service: ApolloService.Private,
    },
    onCompleted: data => {
      const businessName = data?.getBusinessConfig?.business?.name ?? '';
      const primaryColor = data?.getBusinessConfig?.primaryColor ?? '';
      const textColor = data?.getBusinessConfig?.primaryButtonTextColor ?? '';
      const logoMark = data?.getBusinessConfig?.logoMark ?? '';

      setBusinessStates({
        businessId: data?.getBusinessConfig?.businessId ?? '',
        businessLogo: data?.getBusinessConfig?.logoType ?? '',
        businessThumbnail: logoMark,
        primaryColor,
        businessName,
        buttonTextColor: textColor,
      });

      if (businessName) {
        ThemeTool.setWebsiteTitle(businessName);
      }

      if (logoMark) {
        ThemeTool.setWebIcon(logoMark);
      }

      if (primaryColor || textColor) {
        // overwrite colors
        if (primaryColor) {
          COLOR.primary = primaryColor;
          COLOR.primaryLight = ThemeTool.getHexColorVariant(primaryColor, 0.8);
        }

        if (textColor) {
          COLOR.primaryText = textColor;
        }

        //map colors variables for root
        const root = document.documentElement;

        const setProperties = <T extends object>(obj: T, prefix = ''): void => {
          Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
              setProperties(value, `${prefix}${key}-`);
            } else if (typeof value === 'string') {
              root.style.setProperty(`--${prefix}${key}-color`, value);
            }
          });
        };

        setProperties(COLOR);
      }
    },
  });

  useGetWhiteLabelConfigQuery({
    context: {
      service: ApolloService.Private,
    },
    onCompleted: data => {
      setBusinessStates({
        reactUrl: data?.getWhiteLabelAppConfigMe?.customConfigs
          ?.subWhiteLabelWebConfig as string,
        wordPressUrl: data?.getWhiteLabelAppConfigMe?.customConfigs
          ?.whiteLabelWebConfig as string,
        requireAuthentication:
          (data?.getWhiteLabelAppConfigMe?.customConfigs
            ?.requireAuthentication as boolean) ?? false,
      });
    },
  });

  useGetBusinessMeQuery({
    context: {
      service: ApolloService.Private,
    },
    onCompleted: data => {
      const currency =
        data?.getBusinessMe?.businessConfig?.currency ?? Currency.Vnd;

      setBusinessStates({
        messengerLink: data?.getBusinessMe?.messenger ?? '',
        zaloLink: data?.getBusinessMe?.zalo ?? '',
        address: data?.getBusinessMe?.address ?? '',
        facebookLink: data?.getBusinessMe?.facebook ?? '',
        youtubeLink: data?.getBusinessMe?.youtube ?? '',
        linkedinLink: data?.getBusinessMe?.linkedln ?? '',
        twitterLink: data?.getBusinessMe?.twitter ?? '',
        phoneContact: data?.getBusinessMe?.phoneContact ?? '',
        emailContact: data?.getBusinessMe?.emailContact ?? '',
        description: data?.getBusinessMe?.description ?? '',
        tiktokLink: data?.getBusinessMe?.tiktok ?? '',
        currency,
        currencySymbol: currency ? CURRENCY_SYMBOL.get(currency) : undefined,
        coordinate: {
          latitude: (data?.getBusinessMe?.coordinates?.latitude as number) ?? 0,
          longitude:
            (data?.getBusinessMe?.coordinates?.longitude as number) ?? 0,
        },
      });
    },
  });

  useEffect(() => {
    if (businessThumbnail) {
      ThemeTool.setWebIcon(businessThumbnail);
    }

    if (businessName) {
      ThemeTool.setWebsiteTitle(businessName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
