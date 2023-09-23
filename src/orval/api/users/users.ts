/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Tspec API
 * OpenAPI spec version: 0.0.1
 */
import {useQuery, useMutation} from '@tanstack/react-query';
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from '@tanstack/react-query';
import type {
  UsersApiSpecPostUsersSignup201,
  UsersApiSpecPostUsersSignupBody,
  UsersApiSpecPostUsersSignin201,
  UsersApiSpecPostUsersSigninBody,
  UsersApiSpecGetUsersCheck200,
  UsersApiSpecGetUsersCheckParams,
  UsersApiSpecDeleteUsers204,
  UsersApiSpecGetUsers200,
  UsersApiSpecGetUsersRenew200,
} from '../../model';
import {customInstance} from '../../../api/Instance';
import type {ErrorType} from '../../../api/Instance';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * @summary 유저 회원가입
 */
export const usersApiSpecPostUsersSignup = (
  usersApiSpecPostUsersSignupBody: UsersApiSpecPostUsersSignupBody,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<UsersApiSpecPostUsersSignup201>(
    {
      url: `/users/signup`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: usersApiSpecPostUsersSignupBody,
    },
    options,
  );
};

export const getUsersApiSpecPostUsersSignupMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiSpecPostUsersSignup>>,
    TError,
    {data: UsersApiSpecPostUsersSignupBody},
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersApiSpecPostUsersSignup>>,
  TError,
  {data: UsersApiSpecPostUsersSignupBody},
  TContext
> => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersApiSpecPostUsersSignup>>,
    {data: UsersApiSpecPostUsersSignupBody}
  > = props => {
    const {data} = props ?? {};

    return usersApiSpecPostUsersSignup(data, requestOptions);
  };

  return {mutationFn, ...mutationOptions};
};

export type UsersApiSpecPostUsersSignupMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersApiSpecPostUsersSignup>>
>;
export type UsersApiSpecPostUsersSignupMutationBody = UsersApiSpecPostUsersSignupBody;
export type UsersApiSpecPostUsersSignupMutationError = ErrorType<unknown>;

/**
 * @summary 유저 회원가입
 */
export const useUsersApiSpecPostUsersSignup = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiSpecPostUsersSignup>>,
    TError,
    {data: UsersApiSpecPostUsersSignupBody},
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationOptions = getUsersApiSpecPostUsersSignupMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 유저 로그인
 */
export const usersApiSpecPostUsersSignin = (
  usersApiSpecPostUsersSigninBody: UsersApiSpecPostUsersSigninBody,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<UsersApiSpecPostUsersSignin201>(
    {
      url: `/users/signin`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: usersApiSpecPostUsersSigninBody,
    },
    options,
  );
};

export const getUsersApiSpecPostUsersSigninMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiSpecPostUsersSignin>>,
    TError,
    {data: UsersApiSpecPostUsersSigninBody},
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersApiSpecPostUsersSignin>>,
  TError,
  {data: UsersApiSpecPostUsersSigninBody},
  TContext
> => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersApiSpecPostUsersSignin>>,
    {data: UsersApiSpecPostUsersSigninBody}
  > = props => {
    const {data} = props ?? {};

    return usersApiSpecPostUsersSignin(data, requestOptions);
  };

  return {mutationFn, ...mutationOptions};
};

export type UsersApiSpecPostUsersSigninMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersApiSpecPostUsersSignin>>
>;
export type UsersApiSpecPostUsersSigninMutationBody = UsersApiSpecPostUsersSigninBody;
export type UsersApiSpecPostUsersSigninMutationError = ErrorType<unknown>;

/**
 * @summary 유저 로그인
 */
export const useUsersApiSpecPostUsersSignin = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiSpecPostUsersSignin>>,
    TError,
    {data: UsersApiSpecPostUsersSigninBody},
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationOptions = getUsersApiSpecPostUsersSigninMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 이메일 중복체크
 */
export const usersApiSpecGetUsersCheck = (
  params: UsersApiSpecGetUsersCheckParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<UsersApiSpecGetUsersCheck200>(
    {url: `/users/check`, method: 'get', params, signal},
    options,
  );
};

export const getUsersApiSpecGetUsersCheckQueryKey = (params: UsersApiSpecGetUsersCheckParams) =>
  [`/users/check`, ...(params ? [params] : [])] as const;

export const getUsersApiSpecGetUsersCheckQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiSpecGetUsersCheck>>,
  TError = ErrorType<unknown>,
>(
  params: UsersApiSpecGetUsersCheckParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof usersApiSpecGetUsersCheck>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryOptions<Awaited<ReturnType<typeof usersApiSpecGetUsersCheck>>, TError, TData> & {
  queryKey: QueryKey;
} => {
  const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiSpecGetUsersCheckQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiSpecGetUsersCheck>>> = ({
    signal,
  }) => usersApiSpecGetUsersCheck(params, requestOptions, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type UsersApiSpecGetUsersCheckQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiSpecGetUsersCheck>>
>;
export type UsersApiSpecGetUsersCheckQueryError = ErrorType<unknown>;

/**
 * @summary 이메일 중복체크
 */
export const useUsersApiSpecGetUsersCheck = <
  TData = Awaited<ReturnType<typeof usersApiSpecGetUsersCheck>>,
  TError = ErrorType<unknown>,
>(
  params: UsersApiSpecGetUsersCheckParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof usersApiSpecGetUsersCheck>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = getUsersApiSpecGetUsersCheckQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {queryKey: QueryKey};

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 유저 회원탈퇴
 */
export const usersApiSpecDeleteUsers = (options?: SecondParameter<typeof customInstance>) => {
  return customInstance<UsersApiSpecDeleteUsers204>({url: `/users`, method: 'delete'}, options);
};

export const getUsersApiSpecDeleteUsersMutationOptions = <
  TError = ErrorType<unknown>,
  TVariables = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiSpecDeleteUsers>>,
    TError,
    TVariables,
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersApiSpecDeleteUsers>>,
  TError,
  TVariables,
  TContext
> => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersApiSpecDeleteUsers>>,
    TVariables
  > = () => {
    return usersApiSpecDeleteUsers(requestOptions);
  };

  return {mutationFn, ...mutationOptions};
};

export type UsersApiSpecDeleteUsersMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersApiSpecDeleteUsers>>
>;

export type UsersApiSpecDeleteUsersMutationError = ErrorType<unknown>;

/**
 * @summary 유저 회원탈퇴
 */
export const useUsersApiSpecDeleteUsers = <
  TError = ErrorType<unknown>,
  TVariables = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiSpecDeleteUsers>>,
    TError,
    TVariables,
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationOptions = getUsersApiSpecDeleteUsersMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 유저 로그아웃
 */
export const usersApiSpecGetUsers = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<UsersApiSpecGetUsers200>({url: `/users`, method: 'get', signal}, options);
};

export const getUsersApiSpecGetUsersQueryKey = () => [`/users`] as const;

export const getUsersApiSpecGetUsersQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiSpecGetUsers>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof usersApiSpecGetUsers>>, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryOptions<Awaited<ReturnType<typeof usersApiSpecGetUsers>>, TError, TData> & {
  queryKey: QueryKey;
} => {
  const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiSpecGetUsersQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiSpecGetUsers>>> = ({signal}) =>
    usersApiSpecGetUsers(requestOptions, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type UsersApiSpecGetUsersQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiSpecGetUsers>>
>;
export type UsersApiSpecGetUsersQueryError = ErrorType<unknown>;

/**
 * @summary 유저 로그아웃
 */
export const useUsersApiSpecGetUsers = <
  TData = Awaited<ReturnType<typeof usersApiSpecGetUsers>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof usersApiSpecGetUsers>>, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = getUsersApiSpecGetUsersQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {queryKey: QueryKey};

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 토큰 갱신
 */
export const usersApiSpecGetUsersRenew = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<UsersApiSpecGetUsersRenew200>(
    {url: `/users/renew`, method: 'get', signal},
    options,
  );
};

export const getUsersApiSpecGetUsersRenewQueryKey = () => [`/users/renew`] as const;

export const getUsersApiSpecGetUsersRenewQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiSpecGetUsersRenew>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof usersApiSpecGetUsersRenew>>, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryOptions<Awaited<ReturnType<typeof usersApiSpecGetUsersRenew>>, TError, TData> & {
  queryKey: QueryKey;
} => {
  const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiSpecGetUsersRenewQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiSpecGetUsersRenew>>> = ({
    signal,
  }) => usersApiSpecGetUsersRenew(requestOptions, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type UsersApiSpecGetUsersRenewQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiSpecGetUsersRenew>>
>;
export type UsersApiSpecGetUsersRenewQueryError = ErrorType<unknown>;

/**
 * @summary 토큰 갱신
 */
export const useUsersApiSpecGetUsersRenew = <
  TData = Awaited<ReturnType<typeof usersApiSpecGetUsersRenew>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof usersApiSpecGetUsersRenew>>, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = getUsersApiSpecGetUsersRenewQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {queryKey: QueryKey};

  query.queryKey = queryOptions.queryKey;

  return query;
};