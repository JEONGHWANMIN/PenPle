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
  DiaryApiSpecGetDiary200,
  DiaryApiSpecGetDiaryParams,
  DiaryApiSpecPostDiary201,
  DiaryApiSpecPostDiaryBody,
  DiaryApiSpecDeleteDiaryId200,
  DiaryApiSpecGetDiaryId200,
  DiaryApiSpecPatchDiaryId200,
  DiaryApiSpecPatchDiaryIdBody,
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
 * @summary 일기 리스트 조회
 */
export const diaryApiSpecGetDiary = (
  params: DiaryApiSpecGetDiaryParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<DiaryApiSpecGetDiary200>(
    {url: `/diary`, method: 'get', params, signal},
    options,
  );
};

export const getDiaryApiSpecGetDiaryQueryKey = (
  params: DiaryApiSpecGetDiaryParams,
) => [`/diary`, ...(params ? [params] : [])] as const;

export const getDiaryApiSpecGetDiaryQueryOptions = <
  TData = Awaited<ReturnType<typeof diaryApiSpecGetDiary>>,
  TError = ErrorType<unknown>,
>(
  params: DiaryApiSpecGetDiaryParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof diaryApiSpecGetDiary>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof diaryApiSpecGetDiary>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getDiaryApiSpecGetDiaryQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof diaryApiSpecGetDiary>>
  > = ({signal}) => diaryApiSpecGetDiary(params, requestOptions, signal);

  return {queryKey, queryFn, ...queryOptions};
};

export type DiaryApiSpecGetDiaryQueryResult = NonNullable<
  Awaited<ReturnType<typeof diaryApiSpecGetDiary>>
>;
export type DiaryApiSpecGetDiaryQueryError = ErrorType<unknown>;

/**
 * @summary 일기 리스트 조회
 */
export const useDiaryApiSpecGetDiary = <
  TData = Awaited<ReturnType<typeof diaryApiSpecGetDiary>>,
  TError = ErrorType<unknown>,
>(
  params: DiaryApiSpecGetDiaryParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof diaryApiSpecGetDiary>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = getDiaryApiSpecGetDiaryQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 일기 쓰기
 */
export const diaryApiSpecPostDiary = (
  diaryApiSpecPostDiaryBody: DiaryApiSpecPostDiaryBody,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<DiaryApiSpecPostDiary201>(
    {
      url: `/diary`,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: diaryApiSpecPostDiaryBody,
    },
    options,
  );
};

export const getDiaryApiSpecPostDiaryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof diaryApiSpecPostDiary>>,
    TError,
    {data: DiaryApiSpecPostDiaryBody},
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof diaryApiSpecPostDiary>>,
  TError,
  {data: DiaryApiSpecPostDiaryBody},
  TContext
> => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof diaryApiSpecPostDiary>>,
    {data: DiaryApiSpecPostDiaryBody}
  > = props => {
    const {data} = props ?? {};

    return diaryApiSpecPostDiary(data, requestOptions);
  };

  return {mutationFn, ...mutationOptions};
};

export type DiaryApiSpecPostDiaryMutationResult = NonNullable<
  Awaited<ReturnType<typeof diaryApiSpecPostDiary>>
>;
export type DiaryApiSpecPostDiaryMutationBody = DiaryApiSpecPostDiaryBody;
export type DiaryApiSpecPostDiaryMutationError = ErrorType<unknown>;

/**
 * @summary 일기 쓰기
 */
export const useDiaryApiSpecPostDiary = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof diaryApiSpecPostDiary>>,
    TError,
    {data: DiaryApiSpecPostDiaryBody},
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationOptions = getDiaryApiSpecPostDiaryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 일기 삭제
 */
export const diaryApiSpecDeleteDiaryId = (
  id: number,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<DiaryApiSpecDeleteDiaryId200>(
    {url: `/diary/${id}`, method: 'delete'},
    options,
  );
};

export const getDiaryApiSpecDeleteDiaryIdMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof diaryApiSpecDeleteDiaryId>>,
    TError,
    {id: number},
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof diaryApiSpecDeleteDiaryId>>,
  TError,
  {id: number},
  TContext
> => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof diaryApiSpecDeleteDiaryId>>,
    {id: number}
  > = props => {
    const {id} = props ?? {};

    return diaryApiSpecDeleteDiaryId(id, requestOptions);
  };

  return {mutationFn, ...mutationOptions};
};

export type DiaryApiSpecDeleteDiaryIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof diaryApiSpecDeleteDiaryId>>
>;

export type DiaryApiSpecDeleteDiaryIdMutationError = ErrorType<unknown>;

/**
 * @summary 일기 삭제
 */
export const useDiaryApiSpecDeleteDiaryId = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof diaryApiSpecDeleteDiaryId>>,
    TError,
    {id: number},
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationOptions = getDiaryApiSpecDeleteDiaryIdMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 일기 조회
 */
export const diaryApiSpecGetDiaryId = (
  id: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<DiaryApiSpecGetDiaryId200>(
    {url: `/diary/${id}`, method: 'get', signal},
    options,
  );
};

export const getDiaryApiSpecGetDiaryIdQueryKey = (id: number) =>
  [`/diary/${id}`] as const;

export const getDiaryApiSpecGetDiaryIdQueryOptions = <
  TData = Awaited<ReturnType<typeof diaryApiSpecGetDiaryId>>,
  TError = ErrorType<unknown>,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof diaryApiSpecGetDiaryId>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof diaryApiSpecGetDiaryId>>,
  TError,
  TData
> & {queryKey: QueryKey} => {
  const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getDiaryApiSpecGetDiaryIdQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof diaryApiSpecGetDiaryId>>
  > = ({signal}) => diaryApiSpecGetDiaryId(id, requestOptions, signal);

  return {queryKey, queryFn, enabled: !!id, ...queryOptions};
};

export type DiaryApiSpecGetDiaryIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof diaryApiSpecGetDiaryId>>
>;
export type DiaryApiSpecGetDiaryIdQueryError = ErrorType<unknown>;

/**
 * @summary 일기 조회
 */
export const useDiaryApiSpecGetDiaryId = <
  TData = Awaited<ReturnType<typeof diaryApiSpecGetDiaryId>>,
  TError = ErrorType<unknown>,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof diaryApiSpecGetDiaryId>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const queryOptions = getDiaryApiSpecGetDiaryIdQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 일기 수정
 */
export const diaryApiSpecPatchDiaryId = (
  id: number,
  diaryApiSpecPatchDiaryIdBody: DiaryApiSpecPatchDiaryIdBody,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<DiaryApiSpecPatchDiaryId200>(
    {
      url: `/diary/${id}`,
      method: 'patch',
      headers: {'Content-Type': 'application/json'},
      data: diaryApiSpecPatchDiaryIdBody,
    },
    options,
  );
};

export const getDiaryApiSpecPatchDiaryIdMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof diaryApiSpecPatchDiaryId>>,
    TError,
    {id: number; data: DiaryApiSpecPatchDiaryIdBody},
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof diaryApiSpecPatchDiaryId>>,
  TError,
  {id: number; data: DiaryApiSpecPatchDiaryIdBody},
  TContext
> => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof diaryApiSpecPatchDiaryId>>,
    {id: number; data: DiaryApiSpecPatchDiaryIdBody}
  > = props => {
    const {id, data} = props ?? {};

    return diaryApiSpecPatchDiaryId(id, data, requestOptions);
  };

  return {mutationFn, ...mutationOptions};
};

export type DiaryApiSpecPatchDiaryIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof diaryApiSpecPatchDiaryId>>
>;
export type DiaryApiSpecPatchDiaryIdMutationBody = DiaryApiSpecPatchDiaryIdBody;
export type DiaryApiSpecPatchDiaryIdMutationError = ErrorType<unknown>;

/**
 * @summary 일기 수정
 */
export const useDiaryApiSpecPatchDiaryId = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof diaryApiSpecPatchDiaryId>>,
    TError,
    {id: number; data: DiaryApiSpecPatchDiaryIdBody},
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const mutationOptions = getDiaryApiSpecPatchDiaryIdMutationOptions(options);

  return useMutation(mutationOptions);
};
