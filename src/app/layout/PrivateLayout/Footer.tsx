import { useGetNavItems } from '@/app/features/navbar';
import { ReactComponent as SmartosLogo } from '@/shared/assets/svgs/logo-smartos.svg';
import { MAX_WIDTH_LAYOUT } from '@/shared/constants';
import { useResponsive } from '@/shared/hooks';
import { useBusinessStore } from '@/shared/stores/businessStore';
import { TextTool } from '@/shared/utils';
import { Icon } from '@iconify/react/dist/iconify.cjs';
import { Col, Divider, Flex, Image, Layout, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import { Call, Location } from 'iconsax-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/tailwind';

const { Footer: AntdFooter } = Layout;
const { Text } = Typography;

function Footer() {
  const { t } = useTranslation();
  const {
    businessLogo,
    phoneContact,
    emailContact,
    address,
    description,
    facebookLink,
    twitterLink,
    youtubeLink,
    linkedinLink,
    tiktokLink,
    coordinate,
  } = useBusinessStore();
  const { isDesktop } = useResponsive();

  const navItems = useGetNavItems();

  const generalInfoItems = [
    {
      icon: <Location size="24" />,
      value: address,
      link: TextTool.getGoogleMapUrl(
        coordinate?.latitude,
        coordinate?.longitude,
      ),
    },
    {
      icon: <Icon height="24" icon="solar:letter-linear" width="24" />,
      value: emailContact,
      link: TextTool.getMailToUrl(emailContact),
    },
    {
      icon: <Call size="24" />,
      value: phoneContact,
      link: TextTool.getPhoneCallUrl(phoneContact),
    },
  ];

  const socialItems = [
    {
      icon: <Icon height="20" icon="ri:facebook-fill" width="20" />,
      link: facebookLink,
    },
    {
      icon: <Icon height="16" icon="prime:twitter" width="16" />,
      link: twitterLink,
    },
    {
      icon: <Icon height="16" icon="bi:youtube" width="16" />,
      link: youtubeLink,
    },
    {
      icon: <Icon height="18" icon="ri:linkedin-fill" width="18" />,
      link: linkedinLink,
    },
    {
      icon: <Icon height="20" icon="ic:baseline-tiktok" width="20" />,
      link: tiktokLink,
    },
  ];

  const infoSpan = useMemo(() => {
    if (!isDesktop) {
      return 24;
    }

    if (navItems?.length) {
      return 8;
    }

    return 12;
  }, [isDesktop, navItems?.length]);

  return (
    <AntdFooter
      className={cn('bg-white pb-0 pt-32', isDesktop ? 'px-8' : 'px-4')}
    >
      <Flex
        style={{
          maxWidth: MAX_WIDTH_LAYOUT,
        }}
        className="w-full"
        vertical
      >
        <Row className="w-full" gutter={[56, 32]}>
          <Col span={infoSpan}>
            <Flex gap="1.5rem" vertical>
              <Image
                className="flex-shrink-0 object-contain object-left"
                height="3.875rem"
                preview={false}
                src={businessLogo}
                width="100%"
              />

              <Flex gap="0.5rem" vertical>
                {generalInfoItems
                  .filter(({ value }) => !!value)
                  .map(({ icon, value, link }, index) => (
                    <a
                      className="group w-fit cursor-pointer hover:text-primary"
                      href={link}
                      key={index}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Flex className="w-fit" gap="0.5rem">
                        <div className="flex-shrink-0 group-hover:text-primary">
                          {icon}
                        </div>
                        <Text className="text-base font-semibold text-neutral-600 opacity-90 group-hover:text-primary">
                          {value}
                        </Text>
                      </Flex>
                    </a>
                  ))}
              </Flex>
            </Flex>
          </Col>

          <Col span={infoSpan}>
            <Flex gap="2rem" vertical>
              <Text className="text-2xl font-semibold">
                {t('common.label.aboutUs')}
              </Text>

              <Text className="text-justify text-base">{description}</Text>
            </Flex>
          </Col>

          {navItems?.length ? (
            <Col span={infoSpan}>
              <Flex gap="2rem" vertical>
                <Text className="text-2xl font-semibold">
                  {t('common.label.quickView')}
                </Text>

                <Row gutter={[24, 24]}>
                  {navItems.map(item => (
                    <Col key={item.key} span={12}>
                      <Text
                        className={cn(
                          'text-base font-semibold text-neutral-600 opacity-90',
                          item.onClick
                            ? 'cursor-pointer hover:text-primary'
                            : 'cursor-default',
                        )}
                        onClick={item.onClick}
                      >
                        {item.label}
                      </Text>
                    </Col>
                  ))}
                </Row>
              </Flex>
            </Col>
          ) : null}
        </Row>

        <Divider
          className={cn('mb-0', isDesktop ? 'mt-[5rem]' : 'mt-[2rem]')}
        />

        <Row className="py-10" gutter={[0, 24]}>
          <Col span={isDesktop ? 8 : 24}>
            <Flex align="center" gap="0.625rem">
              {socialItems
                .filter(({ link }) => !!link)
                .map(({ icon, link }, index) => (
                  <a
                    className="group cursor-pointer hover:text-primary"
                    href={link}
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Flex
                      align="center"
                      className="h-8 w-8 rounded-full border border-solid border-neutral-500 group-hover:border-primary"
                      justify="center"
                    >
                      {icon}
                    </Flex>
                  </a>
                ))}
            </Flex>
          </Col>

          <Col span={isDesktop ? 8 : 24}>
            <Flex
              align="center"
              className="h-8"
              justify={isDesktop ? 'center' : 'start'}
            >
              <Text>{`Copyrights ${dayjs().year()} @ Smartos Design Team`}</Text>
            </Flex>
          </Col>

          <Col span={isDesktop ? 8 : 24}>
            <a
              className="group cursor-pointer hover:text-primary"
              href="https://smartos.space"
              rel="noreferrer"
              target="_blank"
            >
              <Flex justify={isDesktop ? 'end' : 'start'}>
                <SmartosLogo />
              </Flex>
            </a>
          </Col>
        </Row>
      </Flex>
    </AntdFooter>
  );
}

export default Footer;
