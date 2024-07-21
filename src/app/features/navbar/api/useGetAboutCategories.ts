import {
  QueryOperator,
  useGetAboutCategoriesQuery,
} from '@/shared/api/private/schemas';
import { ApolloService } from '@/shared/types';
import { ApiTool } from '@/shared/utils';

export const useGetAboutCategories = () => {
  const { data, loading } = useGetAboutCategoriesQuery({
    context: {
      service: ApolloService.Private,
    },
    variables: {
      queryParams: {
        orderBy: ApiTool.getOrderby('PostCategoryBlog.name', 'ASC'),
        page: 1,
        limit: 20,
        filters: [
          {
            data: 'true',
            field: 'PostCategoryBlog.isActive',
            operator: QueryOperator.Eq,
          },
        ],
      },
    },
  });

  const categories = data?.getPostCategoryBlogs?.items || [];

  return {
    categories,
    loading,
  };
};
