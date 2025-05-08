
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Contenido
 * 
 */
export type Contenido = $Result.DefaultSelection<Prisma.$ContenidoPayload>
/**
 * Model Pelicula
 * 
 */
export type Pelicula = $Result.DefaultSelection<Prisma.$PeliculaPayload>
/**
 * Model Serie
 * 
 */
export type Serie = $Result.DefaultSelection<Prisma.$SeriePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoContenido: {
  PELICULA: 'PELICULA',
  SERIE: 'SERIE'
};

export type TipoContenido = (typeof TipoContenido)[keyof typeof TipoContenido]

}

export type TipoContenido = $Enums.TipoContenido

export const TipoContenido: typeof $Enums.TipoContenido

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contenidos
 * const contenidos = await prisma.contenido.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contenidos
   * const contenidos = await prisma.contenido.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contenido`: Exposes CRUD operations for the **Contenido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contenidos
    * const contenidos = await prisma.contenido.findMany()
    * ```
    */
  get contenido(): Prisma.ContenidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pelicula`: Exposes CRUD operations for the **Pelicula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peliculas
    * const peliculas = await prisma.pelicula.findMany()
    * ```
    */
  get pelicula(): Prisma.PeliculaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serie`: Exposes CRUD operations for the **Serie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.serie.findMany()
    * ```
    */
  get serie(): Prisma.SerieDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Contenido: 'Contenido',
    Pelicula: 'Pelicula',
    Serie: 'Serie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contenido" | "pelicula" | "serie"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Contenido: {
        payload: Prisma.$ContenidoPayload<ExtArgs>
        fields: Prisma.ContenidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContenidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContenidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload>
          }
          findFirst: {
            args: Prisma.ContenidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContenidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload>
          }
          findMany: {
            args: Prisma.ContenidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload>[]
          }
          create: {
            args: Prisma.ContenidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload>
          }
          createMany: {
            args: Prisma.ContenidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContenidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload>[]
          }
          delete: {
            args: Prisma.ContenidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload>
          }
          update: {
            args: Prisma.ContenidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload>
          }
          deleteMany: {
            args: Prisma.ContenidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContenidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContenidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload>[]
          }
          upsert: {
            args: Prisma.ContenidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContenidoPayload>
          }
          aggregate: {
            args: Prisma.ContenidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContenido>
          }
          groupBy: {
            args: Prisma.ContenidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContenidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContenidoCountArgs<ExtArgs>
            result: $Utils.Optional<ContenidoCountAggregateOutputType> | number
          }
        }
      }
      Pelicula: {
        payload: Prisma.$PeliculaPayload<ExtArgs>
        fields: Prisma.PeliculaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeliculaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeliculaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          findFirst: {
            args: Prisma.PeliculaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeliculaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          findMany: {
            args: Prisma.PeliculaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>[]
          }
          create: {
            args: Prisma.PeliculaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          createMany: {
            args: Prisma.PeliculaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeliculaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>[]
          }
          delete: {
            args: Prisma.PeliculaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          update: {
            args: Prisma.PeliculaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          deleteMany: {
            args: Prisma.PeliculaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeliculaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeliculaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>[]
          }
          upsert: {
            args: Prisma.PeliculaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeliculaPayload>
          }
          aggregate: {
            args: Prisma.PeliculaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePelicula>
          }
          groupBy: {
            args: Prisma.PeliculaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeliculaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeliculaCountArgs<ExtArgs>
            result: $Utils.Optional<PeliculaCountAggregateOutputType> | number
          }
        }
      }
      Serie: {
        payload: Prisma.$SeriePayload<ExtArgs>
        fields: Prisma.SerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          findFirst: {
            args: Prisma.SerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          findMany: {
            args: Prisma.SerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>[]
          }
          create: {
            args: Prisma.SerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          createMany: {
            args: Prisma.SerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SerieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>[]
          }
          delete: {
            args: Prisma.SerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          update: {
            args: Prisma.SerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          deleteMany: {
            args: Prisma.SerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SerieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>[]
          }
          upsert: {
            args: Prisma.SerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          aggregate: {
            args: Prisma.SerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSerie>
          }
          groupBy: {
            args: Prisma.SerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<SerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.SerieCountArgs<ExtArgs>
            result: $Utils.Optional<SerieCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contenido?: ContenidoOmit
    pelicula?: PeliculaOmit
    serie?: SerieOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Contenido
   */

  export type AggregateContenido = {
    _count: ContenidoCountAggregateOutputType | null
    _avg: ContenidoAvgAggregateOutputType | null
    _sum: ContenidoSumAggregateOutputType | null
    _min: ContenidoMinAggregateOutputType | null
    _max: ContenidoMaxAggregateOutputType | null
  }

  export type ContenidoAvgAggregateOutputType = {
    id: number | null
  }

  export type ContenidoSumAggregateOutputType = {
    id: number | null
  }

  export type ContenidoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    tipo: $Enums.TipoContenido | null
  }

  export type ContenidoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    tipo: $Enums.TipoContenido | null
  }

  export type ContenidoCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    tipo: number
    _all: number
  }


  export type ContenidoAvgAggregateInputType = {
    id?: true
  }

  export type ContenidoSumAggregateInputType = {
    id?: true
  }

  export type ContenidoMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    tipo?: true
  }

  export type ContenidoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    tipo?: true
  }

  export type ContenidoCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    tipo?: true
    _all?: true
  }

  export type ContenidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contenido to aggregate.
     */
    where?: ContenidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contenidos to fetch.
     */
    orderBy?: ContenidoOrderByWithRelationInput | ContenidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContenidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contenidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contenidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contenidos
    **/
    _count?: true | ContenidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContenidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContenidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContenidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContenidoMaxAggregateInputType
  }

  export type GetContenidoAggregateType<T extends ContenidoAggregateArgs> = {
        [P in keyof T & keyof AggregateContenido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContenido[P]>
      : GetScalarType<T[P], AggregateContenido[P]>
  }




  export type ContenidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContenidoWhereInput
    orderBy?: ContenidoOrderByWithAggregationInput | ContenidoOrderByWithAggregationInput[]
    by: ContenidoScalarFieldEnum[] | ContenidoScalarFieldEnum
    having?: ContenidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContenidoCountAggregateInputType | true
    _avg?: ContenidoAvgAggregateInputType
    _sum?: ContenidoSumAggregateInputType
    _min?: ContenidoMinAggregateInputType
    _max?: ContenidoMaxAggregateInputType
  }

  export type ContenidoGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string
    tipo: $Enums.TipoContenido
    _count: ContenidoCountAggregateOutputType | null
    _avg: ContenidoAvgAggregateOutputType | null
    _sum: ContenidoSumAggregateOutputType | null
    _min: ContenidoMinAggregateOutputType | null
    _max: ContenidoMaxAggregateOutputType | null
  }

  type GetContenidoGroupByPayload<T extends ContenidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContenidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContenidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContenidoGroupByOutputType[P]>
            : GetScalarType<T[P], ContenidoGroupByOutputType[P]>
        }
      >
    >


  export type ContenidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
    pelicula?: boolean | Contenido$peliculaArgs<ExtArgs>
    serie?: boolean | Contenido$serieArgs<ExtArgs>
  }, ExtArgs["result"]["contenido"]>

  export type ContenidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["contenido"]>

  export type ContenidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["contenido"]>

  export type ContenidoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
  }

  export type ContenidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "tipo", ExtArgs["result"]["contenido"]>
  export type ContenidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelicula?: boolean | Contenido$peliculaArgs<ExtArgs>
    serie?: boolean | Contenido$serieArgs<ExtArgs>
  }
  export type ContenidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContenidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContenidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contenido"
    objects: {
      pelicula: Prisma.$PeliculaPayload<ExtArgs> | null
      serie: Prisma.$SeriePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string
      tipo: $Enums.TipoContenido
    }, ExtArgs["result"]["contenido"]>
    composites: {}
  }

  type ContenidoGetPayload<S extends boolean | null | undefined | ContenidoDefaultArgs> = $Result.GetResult<Prisma.$ContenidoPayload, S>

  type ContenidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContenidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContenidoCountAggregateInputType | true
    }

  export interface ContenidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contenido'], meta: { name: 'Contenido' } }
    /**
     * Find zero or one Contenido that matches the filter.
     * @param {ContenidoFindUniqueArgs} args - Arguments to find a Contenido
     * @example
     * // Get one Contenido
     * const contenido = await prisma.contenido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContenidoFindUniqueArgs>(args: SelectSubset<T, ContenidoFindUniqueArgs<ExtArgs>>): Prisma__ContenidoClient<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contenido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContenidoFindUniqueOrThrowArgs} args - Arguments to find a Contenido
     * @example
     * // Get one Contenido
     * const contenido = await prisma.contenido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContenidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContenidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContenidoClient<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contenido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContenidoFindFirstArgs} args - Arguments to find a Contenido
     * @example
     * // Get one Contenido
     * const contenido = await prisma.contenido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContenidoFindFirstArgs>(args?: SelectSubset<T, ContenidoFindFirstArgs<ExtArgs>>): Prisma__ContenidoClient<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contenido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContenidoFindFirstOrThrowArgs} args - Arguments to find a Contenido
     * @example
     * // Get one Contenido
     * const contenido = await prisma.contenido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContenidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContenidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContenidoClient<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contenidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContenidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contenidos
     * const contenidos = await prisma.contenido.findMany()
     * 
     * // Get first 10 Contenidos
     * const contenidos = await prisma.contenido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contenidoWithIdOnly = await prisma.contenido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContenidoFindManyArgs>(args?: SelectSubset<T, ContenidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contenido.
     * @param {ContenidoCreateArgs} args - Arguments to create a Contenido.
     * @example
     * // Create one Contenido
     * const Contenido = await prisma.contenido.create({
     *   data: {
     *     // ... data to create a Contenido
     *   }
     * })
     * 
     */
    create<T extends ContenidoCreateArgs>(args: SelectSubset<T, ContenidoCreateArgs<ExtArgs>>): Prisma__ContenidoClient<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contenidos.
     * @param {ContenidoCreateManyArgs} args - Arguments to create many Contenidos.
     * @example
     * // Create many Contenidos
     * const contenido = await prisma.contenido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContenidoCreateManyArgs>(args?: SelectSubset<T, ContenidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contenidos and returns the data saved in the database.
     * @param {ContenidoCreateManyAndReturnArgs} args - Arguments to create many Contenidos.
     * @example
     * // Create many Contenidos
     * const contenido = await prisma.contenido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contenidos and only return the `id`
     * const contenidoWithIdOnly = await prisma.contenido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContenidoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContenidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contenido.
     * @param {ContenidoDeleteArgs} args - Arguments to delete one Contenido.
     * @example
     * // Delete one Contenido
     * const Contenido = await prisma.contenido.delete({
     *   where: {
     *     // ... filter to delete one Contenido
     *   }
     * })
     * 
     */
    delete<T extends ContenidoDeleteArgs>(args: SelectSubset<T, ContenidoDeleteArgs<ExtArgs>>): Prisma__ContenidoClient<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contenido.
     * @param {ContenidoUpdateArgs} args - Arguments to update one Contenido.
     * @example
     * // Update one Contenido
     * const contenido = await prisma.contenido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContenidoUpdateArgs>(args: SelectSubset<T, ContenidoUpdateArgs<ExtArgs>>): Prisma__ContenidoClient<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contenidos.
     * @param {ContenidoDeleteManyArgs} args - Arguments to filter Contenidos to delete.
     * @example
     * // Delete a few Contenidos
     * const { count } = await prisma.contenido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContenidoDeleteManyArgs>(args?: SelectSubset<T, ContenidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contenidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContenidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contenidos
     * const contenido = await prisma.contenido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContenidoUpdateManyArgs>(args: SelectSubset<T, ContenidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contenidos and returns the data updated in the database.
     * @param {ContenidoUpdateManyAndReturnArgs} args - Arguments to update many Contenidos.
     * @example
     * // Update many Contenidos
     * const contenido = await prisma.contenido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contenidos and only return the `id`
     * const contenidoWithIdOnly = await prisma.contenido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContenidoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContenidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contenido.
     * @param {ContenidoUpsertArgs} args - Arguments to update or create a Contenido.
     * @example
     * // Update or create a Contenido
     * const contenido = await prisma.contenido.upsert({
     *   create: {
     *     // ... data to create a Contenido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contenido we want to update
     *   }
     * })
     */
    upsert<T extends ContenidoUpsertArgs>(args: SelectSubset<T, ContenidoUpsertArgs<ExtArgs>>): Prisma__ContenidoClient<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contenidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContenidoCountArgs} args - Arguments to filter Contenidos to count.
     * @example
     * // Count the number of Contenidos
     * const count = await prisma.contenido.count({
     *   where: {
     *     // ... the filter for the Contenidos we want to count
     *   }
     * })
    **/
    count<T extends ContenidoCountArgs>(
      args?: Subset<T, ContenidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContenidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contenido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContenidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContenidoAggregateArgs>(args: Subset<T, ContenidoAggregateArgs>): Prisma.PrismaPromise<GetContenidoAggregateType<T>>

    /**
     * Group by Contenido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContenidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContenidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContenidoGroupByArgs['orderBy'] }
        : { orderBy?: ContenidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContenidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContenidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contenido model
   */
  readonly fields: ContenidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contenido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContenidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pelicula<T extends Contenido$peliculaArgs<ExtArgs> = {}>(args?: Subset<T, Contenido$peliculaArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    serie<T extends Contenido$serieArgs<ExtArgs> = {}>(args?: Subset<T, Contenido$serieArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contenido model
   */
  interface ContenidoFieldRefs {
    readonly id: FieldRef<"Contenido", 'Int'>
    readonly titulo: FieldRef<"Contenido", 'String'>
    readonly descripcion: FieldRef<"Contenido", 'String'>
    readonly tipo: FieldRef<"Contenido", 'TipoContenido'>
  }
    

  // Custom InputTypes
  /**
   * Contenido findUnique
   */
  export type ContenidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContenidoInclude<ExtArgs> | null
    /**
     * Filter, which Contenido to fetch.
     */
    where: ContenidoWhereUniqueInput
  }

  /**
   * Contenido findUniqueOrThrow
   */
  export type ContenidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContenidoInclude<ExtArgs> | null
    /**
     * Filter, which Contenido to fetch.
     */
    where: ContenidoWhereUniqueInput
  }

  /**
   * Contenido findFirst
   */
  export type ContenidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContenidoInclude<ExtArgs> | null
    /**
     * Filter, which Contenido to fetch.
     */
    where?: ContenidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contenidos to fetch.
     */
    orderBy?: ContenidoOrderByWithRelationInput | ContenidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contenidos.
     */
    cursor?: ContenidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contenidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contenidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contenidos.
     */
    distinct?: ContenidoScalarFieldEnum | ContenidoScalarFieldEnum[]
  }

  /**
   * Contenido findFirstOrThrow
   */
  export type ContenidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContenidoInclude<ExtArgs> | null
    /**
     * Filter, which Contenido to fetch.
     */
    where?: ContenidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contenidos to fetch.
     */
    orderBy?: ContenidoOrderByWithRelationInput | ContenidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contenidos.
     */
    cursor?: ContenidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contenidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contenidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contenidos.
     */
    distinct?: ContenidoScalarFieldEnum | ContenidoScalarFieldEnum[]
  }

  /**
   * Contenido findMany
   */
  export type ContenidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContenidoInclude<ExtArgs> | null
    /**
     * Filter, which Contenidos to fetch.
     */
    where?: ContenidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contenidos to fetch.
     */
    orderBy?: ContenidoOrderByWithRelationInput | ContenidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contenidos.
     */
    cursor?: ContenidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contenidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contenidos.
     */
    skip?: number
    distinct?: ContenidoScalarFieldEnum | ContenidoScalarFieldEnum[]
  }

  /**
   * Contenido create
   */
  export type ContenidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContenidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Contenido.
     */
    data: XOR<ContenidoCreateInput, ContenidoUncheckedCreateInput>
  }

  /**
   * Contenido createMany
   */
  export type ContenidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contenidos.
     */
    data: ContenidoCreateManyInput | ContenidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contenido createManyAndReturn
   */
  export type ContenidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * The data used to create many Contenidos.
     */
    data: ContenidoCreateManyInput | ContenidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contenido update
   */
  export type ContenidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContenidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Contenido.
     */
    data: XOR<ContenidoUpdateInput, ContenidoUncheckedUpdateInput>
    /**
     * Choose, which Contenido to update.
     */
    where: ContenidoWhereUniqueInput
  }

  /**
   * Contenido updateMany
   */
  export type ContenidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contenidos.
     */
    data: XOR<ContenidoUpdateManyMutationInput, ContenidoUncheckedUpdateManyInput>
    /**
     * Filter which Contenidos to update
     */
    where?: ContenidoWhereInput
    /**
     * Limit how many Contenidos to update.
     */
    limit?: number
  }

  /**
   * Contenido updateManyAndReturn
   */
  export type ContenidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * The data used to update Contenidos.
     */
    data: XOR<ContenidoUpdateManyMutationInput, ContenidoUncheckedUpdateManyInput>
    /**
     * Filter which Contenidos to update
     */
    where?: ContenidoWhereInput
    /**
     * Limit how many Contenidos to update.
     */
    limit?: number
  }

  /**
   * Contenido upsert
   */
  export type ContenidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContenidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Contenido to update in case it exists.
     */
    where: ContenidoWhereUniqueInput
    /**
     * In case the Contenido found by the `where` argument doesn't exist, create a new Contenido with this data.
     */
    create: XOR<ContenidoCreateInput, ContenidoUncheckedCreateInput>
    /**
     * In case the Contenido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContenidoUpdateInput, ContenidoUncheckedUpdateInput>
  }

  /**
   * Contenido delete
   */
  export type ContenidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContenidoInclude<ExtArgs> | null
    /**
     * Filter which Contenido to delete.
     */
    where: ContenidoWhereUniqueInput
  }

  /**
   * Contenido deleteMany
   */
  export type ContenidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contenidos to delete
     */
    where?: ContenidoWhereInput
    /**
     * Limit how many Contenidos to delete.
     */
    limit?: number
  }

  /**
   * Contenido.pelicula
   */
  export type Contenido$peliculaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
    where?: PeliculaWhereInput
  }

  /**
   * Contenido.serie
   */
  export type Contenido$serieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    where?: SerieWhereInput
  }

  /**
   * Contenido without action
   */
  export type ContenidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contenido
     */
    select?: ContenidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contenido
     */
    omit?: ContenidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContenidoInclude<ExtArgs> | null
  }


  /**
   * Model Pelicula
   */

  export type AggregatePelicula = {
    _count: PeliculaCountAggregateOutputType | null
    _avg: PeliculaAvgAggregateOutputType | null
    _sum: PeliculaSumAggregateOutputType | null
    _min: PeliculaMinAggregateOutputType | null
    _max: PeliculaMaxAggregateOutputType | null
  }

  export type PeliculaAvgAggregateOutputType = {
    id: number | null
    duracion: number | null
  }

  export type PeliculaSumAggregateOutputType = {
    id: number | null
    duracion: number | null
  }

  export type PeliculaMinAggregateOutputType = {
    id: number | null
    duracion: number | null
  }

  export type PeliculaMaxAggregateOutputType = {
    id: number | null
    duracion: number | null
  }

  export type PeliculaCountAggregateOutputType = {
    id: number
    duracion: number
    _all: number
  }


  export type PeliculaAvgAggregateInputType = {
    id?: true
    duracion?: true
  }

  export type PeliculaSumAggregateInputType = {
    id?: true
    duracion?: true
  }

  export type PeliculaMinAggregateInputType = {
    id?: true
    duracion?: true
  }

  export type PeliculaMaxAggregateInputType = {
    id?: true
    duracion?: true
  }

  export type PeliculaCountAggregateInputType = {
    id?: true
    duracion?: true
    _all?: true
  }

  export type PeliculaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pelicula to aggregate.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peliculas
    **/
    _count?: true | PeliculaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeliculaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeliculaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeliculaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeliculaMaxAggregateInputType
  }

  export type GetPeliculaAggregateType<T extends PeliculaAggregateArgs> = {
        [P in keyof T & keyof AggregatePelicula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePelicula[P]>
      : GetScalarType<T[P], AggregatePelicula[P]>
  }




  export type PeliculaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeliculaWhereInput
    orderBy?: PeliculaOrderByWithAggregationInput | PeliculaOrderByWithAggregationInput[]
    by: PeliculaScalarFieldEnum[] | PeliculaScalarFieldEnum
    having?: PeliculaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeliculaCountAggregateInputType | true
    _avg?: PeliculaAvgAggregateInputType
    _sum?: PeliculaSumAggregateInputType
    _min?: PeliculaMinAggregateInputType
    _max?: PeliculaMaxAggregateInputType
  }

  export type PeliculaGroupByOutputType = {
    id: number
    duracion: number
    _count: PeliculaCountAggregateOutputType | null
    _avg: PeliculaAvgAggregateOutputType | null
    _sum: PeliculaSumAggregateOutputType | null
    _min: PeliculaMinAggregateOutputType | null
    _max: PeliculaMaxAggregateOutputType | null
  }

  type GetPeliculaGroupByPayload<T extends PeliculaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeliculaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeliculaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeliculaGroupByOutputType[P]>
            : GetScalarType<T[P], PeliculaGroupByOutputType[P]>
        }
      >
    >


  export type PeliculaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    duracion?: boolean
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pelicula"]>

  export type PeliculaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    duracion?: boolean
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pelicula"]>

  export type PeliculaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    duracion?: boolean
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pelicula"]>

  export type PeliculaSelectScalar = {
    id?: boolean
    duracion?: boolean
  }

  export type PeliculaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "duracion", ExtArgs["result"]["pelicula"]>
  export type PeliculaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }
  export type PeliculaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }
  export type PeliculaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }

  export type $PeliculaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pelicula"
    objects: {
      contenido: Prisma.$ContenidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      duracion: number
    }, ExtArgs["result"]["pelicula"]>
    composites: {}
  }

  type PeliculaGetPayload<S extends boolean | null | undefined | PeliculaDefaultArgs> = $Result.GetResult<Prisma.$PeliculaPayload, S>

  type PeliculaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeliculaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeliculaCountAggregateInputType | true
    }

  export interface PeliculaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pelicula'], meta: { name: 'Pelicula' } }
    /**
     * Find zero or one Pelicula that matches the filter.
     * @param {PeliculaFindUniqueArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeliculaFindUniqueArgs>(args: SelectSubset<T, PeliculaFindUniqueArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pelicula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeliculaFindUniqueOrThrowArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeliculaFindUniqueOrThrowArgs>(args: SelectSubset<T, PeliculaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelicula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaFindFirstArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeliculaFindFirstArgs>(args?: SelectSubset<T, PeliculaFindFirstArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelicula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaFindFirstOrThrowArgs} args - Arguments to find a Pelicula
     * @example
     * // Get one Pelicula
     * const pelicula = await prisma.pelicula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeliculaFindFirstOrThrowArgs>(args?: SelectSubset<T, PeliculaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peliculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peliculas
     * const peliculas = await prisma.pelicula.findMany()
     * 
     * // Get first 10 Peliculas
     * const peliculas = await prisma.pelicula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peliculaWithIdOnly = await prisma.pelicula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeliculaFindManyArgs>(args?: SelectSubset<T, PeliculaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pelicula.
     * @param {PeliculaCreateArgs} args - Arguments to create a Pelicula.
     * @example
     * // Create one Pelicula
     * const Pelicula = await prisma.pelicula.create({
     *   data: {
     *     // ... data to create a Pelicula
     *   }
     * })
     * 
     */
    create<T extends PeliculaCreateArgs>(args: SelectSubset<T, PeliculaCreateArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peliculas.
     * @param {PeliculaCreateManyArgs} args - Arguments to create many Peliculas.
     * @example
     * // Create many Peliculas
     * const pelicula = await prisma.pelicula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeliculaCreateManyArgs>(args?: SelectSubset<T, PeliculaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peliculas and returns the data saved in the database.
     * @param {PeliculaCreateManyAndReturnArgs} args - Arguments to create many Peliculas.
     * @example
     * // Create many Peliculas
     * const pelicula = await prisma.pelicula.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peliculas and only return the `id`
     * const peliculaWithIdOnly = await prisma.pelicula.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeliculaCreateManyAndReturnArgs>(args?: SelectSubset<T, PeliculaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pelicula.
     * @param {PeliculaDeleteArgs} args - Arguments to delete one Pelicula.
     * @example
     * // Delete one Pelicula
     * const Pelicula = await prisma.pelicula.delete({
     *   where: {
     *     // ... filter to delete one Pelicula
     *   }
     * })
     * 
     */
    delete<T extends PeliculaDeleteArgs>(args: SelectSubset<T, PeliculaDeleteArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pelicula.
     * @param {PeliculaUpdateArgs} args - Arguments to update one Pelicula.
     * @example
     * // Update one Pelicula
     * const pelicula = await prisma.pelicula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeliculaUpdateArgs>(args: SelectSubset<T, PeliculaUpdateArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peliculas.
     * @param {PeliculaDeleteManyArgs} args - Arguments to filter Peliculas to delete.
     * @example
     * // Delete a few Peliculas
     * const { count } = await prisma.pelicula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeliculaDeleteManyArgs>(args?: SelectSubset<T, PeliculaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peliculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peliculas
     * const pelicula = await prisma.pelicula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeliculaUpdateManyArgs>(args: SelectSubset<T, PeliculaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peliculas and returns the data updated in the database.
     * @param {PeliculaUpdateManyAndReturnArgs} args - Arguments to update many Peliculas.
     * @example
     * // Update many Peliculas
     * const pelicula = await prisma.pelicula.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Peliculas and only return the `id`
     * const peliculaWithIdOnly = await prisma.pelicula.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeliculaUpdateManyAndReturnArgs>(args: SelectSubset<T, PeliculaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pelicula.
     * @param {PeliculaUpsertArgs} args - Arguments to update or create a Pelicula.
     * @example
     * // Update or create a Pelicula
     * const pelicula = await prisma.pelicula.upsert({
     *   create: {
     *     // ... data to create a Pelicula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pelicula we want to update
     *   }
     * })
     */
    upsert<T extends PeliculaUpsertArgs>(args: SelectSubset<T, PeliculaUpsertArgs<ExtArgs>>): Prisma__PeliculaClient<$Result.GetResult<Prisma.$PeliculaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peliculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaCountArgs} args - Arguments to filter Peliculas to count.
     * @example
     * // Count the number of Peliculas
     * const count = await prisma.pelicula.count({
     *   where: {
     *     // ... the filter for the Peliculas we want to count
     *   }
     * })
    **/
    count<T extends PeliculaCountArgs>(
      args?: Subset<T, PeliculaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeliculaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pelicula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeliculaAggregateArgs>(args: Subset<T, PeliculaAggregateArgs>): Prisma.PrismaPromise<GetPeliculaAggregateType<T>>

    /**
     * Group by Pelicula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeliculaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeliculaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeliculaGroupByArgs['orderBy'] }
        : { orderBy?: PeliculaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeliculaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeliculaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pelicula model
   */
  readonly fields: PeliculaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pelicula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeliculaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contenido<T extends ContenidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContenidoDefaultArgs<ExtArgs>>): Prisma__ContenidoClient<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pelicula model
   */
  interface PeliculaFieldRefs {
    readonly id: FieldRef<"Pelicula", 'Int'>
    readonly duracion: FieldRef<"Pelicula", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pelicula findUnique
   */
  export type PeliculaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where: PeliculaWhereUniqueInput
  }

  /**
   * Pelicula findUniqueOrThrow
   */
  export type PeliculaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where: PeliculaWhereUniqueInput
  }

  /**
   * Pelicula findFirst
   */
  export type PeliculaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peliculas.
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peliculas.
     */
    distinct?: PeliculaScalarFieldEnum | PeliculaScalarFieldEnum[]
  }

  /**
   * Pelicula findFirstOrThrow
   */
  export type PeliculaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter, which Pelicula to fetch.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peliculas.
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peliculas.
     */
    distinct?: PeliculaScalarFieldEnum | PeliculaScalarFieldEnum[]
  }

  /**
   * Pelicula findMany
   */
  export type PeliculaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter, which Peliculas to fetch.
     */
    where?: PeliculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peliculas to fetch.
     */
    orderBy?: PeliculaOrderByWithRelationInput | PeliculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peliculas.
     */
    cursor?: PeliculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peliculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peliculas.
     */
    skip?: number
    distinct?: PeliculaScalarFieldEnum | PeliculaScalarFieldEnum[]
  }

  /**
   * Pelicula create
   */
  export type PeliculaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pelicula.
     */
    data: XOR<PeliculaCreateInput, PeliculaUncheckedCreateInput>
  }

  /**
   * Pelicula createMany
   */
  export type PeliculaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peliculas.
     */
    data: PeliculaCreateManyInput | PeliculaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pelicula createManyAndReturn
   */
  export type PeliculaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * The data used to create many Peliculas.
     */
    data: PeliculaCreateManyInput | PeliculaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pelicula update
   */
  export type PeliculaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pelicula.
     */
    data: XOR<PeliculaUpdateInput, PeliculaUncheckedUpdateInput>
    /**
     * Choose, which Pelicula to update.
     */
    where: PeliculaWhereUniqueInput
  }

  /**
   * Pelicula updateMany
   */
  export type PeliculaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peliculas.
     */
    data: XOR<PeliculaUpdateManyMutationInput, PeliculaUncheckedUpdateManyInput>
    /**
     * Filter which Peliculas to update
     */
    where?: PeliculaWhereInput
    /**
     * Limit how many Peliculas to update.
     */
    limit?: number
  }

  /**
   * Pelicula updateManyAndReturn
   */
  export type PeliculaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * The data used to update Peliculas.
     */
    data: XOR<PeliculaUpdateManyMutationInput, PeliculaUncheckedUpdateManyInput>
    /**
     * Filter which Peliculas to update
     */
    where?: PeliculaWhereInput
    /**
     * Limit how many Peliculas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pelicula upsert
   */
  export type PeliculaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pelicula to update in case it exists.
     */
    where: PeliculaWhereUniqueInput
    /**
     * In case the Pelicula found by the `where` argument doesn't exist, create a new Pelicula with this data.
     */
    create: XOR<PeliculaCreateInput, PeliculaUncheckedCreateInput>
    /**
     * In case the Pelicula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeliculaUpdateInput, PeliculaUncheckedUpdateInput>
  }

  /**
   * Pelicula delete
   */
  export type PeliculaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
    /**
     * Filter which Pelicula to delete.
     */
    where: PeliculaWhereUniqueInput
  }

  /**
   * Pelicula deleteMany
   */
  export type PeliculaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peliculas to delete
     */
    where?: PeliculaWhereInput
    /**
     * Limit how many Peliculas to delete.
     */
    limit?: number
  }

  /**
   * Pelicula without action
   */
  export type PeliculaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelicula
     */
    select?: PeliculaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelicula
     */
    omit?: PeliculaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeliculaInclude<ExtArgs> | null
  }


  /**
   * Model Serie
   */

  export type AggregateSerie = {
    _count: SerieCountAggregateOutputType | null
    _avg: SerieAvgAggregateOutputType | null
    _sum: SerieSumAggregateOutputType | null
    _min: SerieMinAggregateOutputType | null
    _max: SerieMaxAggregateOutputType | null
  }

  export type SerieAvgAggregateOutputType = {
    id: number | null
    temporadas: number | null
  }

  export type SerieSumAggregateOutputType = {
    id: number | null
    temporadas: number | null
  }

  export type SerieMinAggregateOutputType = {
    id: number | null
    temporadas: number | null
  }

  export type SerieMaxAggregateOutputType = {
    id: number | null
    temporadas: number | null
  }

  export type SerieCountAggregateOutputType = {
    id: number
    temporadas: number
    _all: number
  }


  export type SerieAvgAggregateInputType = {
    id?: true
    temporadas?: true
  }

  export type SerieSumAggregateInputType = {
    id?: true
    temporadas?: true
  }

  export type SerieMinAggregateInputType = {
    id?: true
    temporadas?: true
  }

  export type SerieMaxAggregateInputType = {
    id?: true
    temporadas?: true
  }

  export type SerieCountAggregateInputType = {
    id?: true
    temporadas?: true
    _all?: true
  }

  export type SerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Serie to aggregate.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Series
    **/
    _count?: true | SerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SerieMaxAggregateInputType
  }

  export type GetSerieAggregateType<T extends SerieAggregateArgs> = {
        [P in keyof T & keyof AggregateSerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSerie[P]>
      : GetScalarType<T[P], AggregateSerie[P]>
  }




  export type SerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SerieWhereInput
    orderBy?: SerieOrderByWithAggregationInput | SerieOrderByWithAggregationInput[]
    by: SerieScalarFieldEnum[] | SerieScalarFieldEnum
    having?: SerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SerieCountAggregateInputType | true
    _avg?: SerieAvgAggregateInputType
    _sum?: SerieSumAggregateInputType
    _min?: SerieMinAggregateInputType
    _max?: SerieMaxAggregateInputType
  }

  export type SerieGroupByOutputType = {
    id: number
    temporadas: number
    _count: SerieCountAggregateOutputType | null
    _avg: SerieAvgAggregateOutputType | null
    _sum: SerieSumAggregateOutputType | null
    _min: SerieMinAggregateOutputType | null
    _max: SerieMaxAggregateOutputType | null
  }

  type GetSerieGroupByPayload<T extends SerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SerieGroupByOutputType[P]>
            : GetScalarType<T[P], SerieGroupByOutputType[P]>
        }
      >
    >


  export type SerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temporadas?: boolean
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serie"]>

  export type SerieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temporadas?: boolean
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serie"]>

  export type SerieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temporadas?: boolean
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serie"]>

  export type SerieSelectScalar = {
    id?: boolean
    temporadas?: boolean
  }

  export type SerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "temporadas", ExtArgs["result"]["serie"]>
  export type SerieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }
  export type SerieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }
  export type SerieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contenido?: boolean | ContenidoDefaultArgs<ExtArgs>
  }

  export type $SeriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Serie"
    objects: {
      contenido: Prisma.$ContenidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      temporadas: number
    }, ExtArgs["result"]["serie"]>
    composites: {}
  }

  type SerieGetPayload<S extends boolean | null | undefined | SerieDefaultArgs> = $Result.GetResult<Prisma.$SeriePayload, S>

  type SerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SerieCountAggregateInputType | true
    }

  export interface SerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Serie'], meta: { name: 'Serie' } }
    /**
     * Find zero or one Serie that matches the filter.
     * @param {SerieFindUniqueArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SerieFindUniqueArgs>(args: SelectSubset<T, SerieFindUniqueArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Serie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SerieFindUniqueOrThrowArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SerieFindUniqueOrThrowArgs>(args: SelectSubset<T, SerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Serie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieFindFirstArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SerieFindFirstArgs>(args?: SelectSubset<T, SerieFindFirstArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Serie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieFindFirstOrThrowArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SerieFindFirstOrThrowArgs>(args?: SelectSubset<T, SerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.serie.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.serie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serieWithIdOnly = await prisma.serie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SerieFindManyArgs>(args?: SelectSubset<T, SerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Serie.
     * @param {SerieCreateArgs} args - Arguments to create a Serie.
     * @example
     * // Create one Serie
     * const Serie = await prisma.serie.create({
     *   data: {
     *     // ... data to create a Serie
     *   }
     * })
     * 
     */
    create<T extends SerieCreateArgs>(args: SelectSubset<T, SerieCreateArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Series.
     * @param {SerieCreateManyArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const serie = await prisma.serie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SerieCreateManyArgs>(args?: SelectSubset<T, SerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Series and returns the data saved in the database.
     * @param {SerieCreateManyAndReturnArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const serie = await prisma.serie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Series and only return the `id`
     * const serieWithIdOnly = await prisma.serie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SerieCreateManyAndReturnArgs>(args?: SelectSubset<T, SerieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Serie.
     * @param {SerieDeleteArgs} args - Arguments to delete one Serie.
     * @example
     * // Delete one Serie
     * const Serie = await prisma.serie.delete({
     *   where: {
     *     // ... filter to delete one Serie
     *   }
     * })
     * 
     */
    delete<T extends SerieDeleteArgs>(args: SelectSubset<T, SerieDeleteArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Serie.
     * @param {SerieUpdateArgs} args - Arguments to update one Serie.
     * @example
     * // Update one Serie
     * const serie = await prisma.serie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SerieUpdateArgs>(args: SelectSubset<T, SerieUpdateArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Series.
     * @param {SerieDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.serie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SerieDeleteManyArgs>(args?: SelectSubset<T, SerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const serie = await prisma.serie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SerieUpdateManyArgs>(args: SelectSubset<T, SerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series and returns the data updated in the database.
     * @param {SerieUpdateManyAndReturnArgs} args - Arguments to update many Series.
     * @example
     * // Update many Series
     * const serie = await prisma.serie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Series and only return the `id`
     * const serieWithIdOnly = await prisma.serie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SerieUpdateManyAndReturnArgs>(args: SelectSubset<T, SerieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Serie.
     * @param {SerieUpsertArgs} args - Arguments to update or create a Serie.
     * @example
     * // Update or create a Serie
     * const serie = await prisma.serie.upsert({
     *   create: {
     *     // ... data to create a Serie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Serie we want to update
     *   }
     * })
     */
    upsert<T extends SerieUpsertArgs>(args: SelectSubset<T, SerieUpsertArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.serie.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends SerieCountArgs>(
      args?: Subset<T, SerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SerieAggregateArgs>(args: Subset<T, SerieAggregateArgs>): Prisma.PrismaPromise<GetSerieAggregateType<T>>

    /**
     * Group by Serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SerieGroupByArgs['orderBy'] }
        : { orderBy?: SerieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Serie model
   */
  readonly fields: SerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Serie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contenido<T extends ContenidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContenidoDefaultArgs<ExtArgs>>): Prisma__ContenidoClient<$Result.GetResult<Prisma.$ContenidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Serie model
   */
  interface SerieFieldRefs {
    readonly id: FieldRef<"Serie", 'Int'>
    readonly temporadas: FieldRef<"Serie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Serie findUnique
   */
  export type SerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie findUniqueOrThrow
   */
  export type SerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie findFirst
   */
  export type SerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SerieScalarFieldEnum | SerieScalarFieldEnum[]
  }

  /**
   * Serie findFirstOrThrow
   */
  export type SerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SerieScalarFieldEnum | SerieScalarFieldEnum[]
  }

  /**
   * Serie findMany
   */
  export type SerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Series.
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    distinct?: SerieScalarFieldEnum | SerieScalarFieldEnum[]
  }

  /**
   * Serie create
   */
  export type SerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * The data needed to create a Serie.
     */
    data: XOR<SerieCreateInput, SerieUncheckedCreateInput>
  }

  /**
   * Serie createMany
   */
  export type SerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Series.
     */
    data: SerieCreateManyInput | SerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Serie createManyAndReturn
   */
  export type SerieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * The data used to create many Series.
     */
    data: SerieCreateManyInput | SerieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Serie update
   */
  export type SerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * The data needed to update a Serie.
     */
    data: XOR<SerieUpdateInput, SerieUncheckedUpdateInput>
    /**
     * Choose, which Serie to update.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie updateMany
   */
  export type SerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Series.
     */
    data: XOR<SerieUpdateManyMutationInput, SerieUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SerieWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
  }

  /**
   * Serie updateManyAndReturn
   */
  export type SerieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * The data used to update Series.
     */
    data: XOR<SerieUpdateManyMutationInput, SerieUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SerieWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Serie upsert
   */
  export type SerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * The filter to search for the Serie to update in case it exists.
     */
    where: SerieWhereUniqueInput
    /**
     * In case the Serie found by the `where` argument doesn't exist, create a new Serie with this data.
     */
    create: XOR<SerieCreateInput, SerieUncheckedCreateInput>
    /**
     * In case the Serie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SerieUpdateInput, SerieUncheckedUpdateInput>
  }

  /**
   * Serie delete
   */
  export type SerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter which Serie to delete.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie deleteMany
   */
  export type SerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to delete
     */
    where?: SerieWhereInput
    /**
     * Limit how many Series to delete.
     */
    limit?: number
  }

  /**
   * Serie without action
   */
  export type SerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContenidoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    tipo: 'tipo'
  };

  export type ContenidoScalarFieldEnum = (typeof ContenidoScalarFieldEnum)[keyof typeof ContenidoScalarFieldEnum]


  export const PeliculaScalarFieldEnum: {
    id: 'id',
    duracion: 'duracion'
  };

  export type PeliculaScalarFieldEnum = (typeof PeliculaScalarFieldEnum)[keyof typeof PeliculaScalarFieldEnum]


  export const SerieScalarFieldEnum: {
    id: 'id',
    temporadas: 'temporadas'
  };

  export type SerieScalarFieldEnum = (typeof SerieScalarFieldEnum)[keyof typeof SerieScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TipoContenido'
   */
  export type EnumTipoContenidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoContenido'>
    


  /**
   * Reference to a field of type 'TipoContenido[]'
   */
  export type ListEnumTipoContenidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoContenido[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ContenidoWhereInput = {
    AND?: ContenidoWhereInput | ContenidoWhereInput[]
    OR?: ContenidoWhereInput[]
    NOT?: ContenidoWhereInput | ContenidoWhereInput[]
    id?: IntFilter<"Contenido"> | number
    titulo?: StringFilter<"Contenido"> | string
    descripcion?: StringFilter<"Contenido"> | string
    tipo?: EnumTipoContenidoFilter<"Contenido"> | $Enums.TipoContenido
    pelicula?: XOR<PeliculaNullableScalarRelationFilter, PeliculaWhereInput> | null
    serie?: XOR<SerieNullableScalarRelationFilter, SerieWhereInput> | null
  }

  export type ContenidoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    pelicula?: PeliculaOrderByWithRelationInput
    serie?: SerieOrderByWithRelationInput
  }

  export type ContenidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContenidoWhereInput | ContenidoWhereInput[]
    OR?: ContenidoWhereInput[]
    NOT?: ContenidoWhereInput | ContenidoWhereInput[]
    titulo?: StringFilter<"Contenido"> | string
    descripcion?: StringFilter<"Contenido"> | string
    tipo?: EnumTipoContenidoFilter<"Contenido"> | $Enums.TipoContenido
    pelicula?: XOR<PeliculaNullableScalarRelationFilter, PeliculaWhereInput> | null
    serie?: XOR<SerieNullableScalarRelationFilter, SerieWhereInput> | null
  }, "id">

  export type ContenidoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    _count?: ContenidoCountOrderByAggregateInput
    _avg?: ContenidoAvgOrderByAggregateInput
    _max?: ContenidoMaxOrderByAggregateInput
    _min?: ContenidoMinOrderByAggregateInput
    _sum?: ContenidoSumOrderByAggregateInput
  }

  export type ContenidoScalarWhereWithAggregatesInput = {
    AND?: ContenidoScalarWhereWithAggregatesInput | ContenidoScalarWhereWithAggregatesInput[]
    OR?: ContenidoScalarWhereWithAggregatesInput[]
    NOT?: ContenidoScalarWhereWithAggregatesInput | ContenidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contenido"> | number
    titulo?: StringWithAggregatesFilter<"Contenido"> | string
    descripcion?: StringWithAggregatesFilter<"Contenido"> | string
    tipo?: EnumTipoContenidoWithAggregatesFilter<"Contenido"> | $Enums.TipoContenido
  }

  export type PeliculaWhereInput = {
    AND?: PeliculaWhereInput | PeliculaWhereInput[]
    OR?: PeliculaWhereInput[]
    NOT?: PeliculaWhereInput | PeliculaWhereInput[]
    id?: IntFilter<"Pelicula"> | number
    duracion?: IntFilter<"Pelicula"> | number
    contenido?: XOR<ContenidoScalarRelationFilter, ContenidoWhereInput>
  }

  export type PeliculaOrderByWithRelationInput = {
    id?: SortOrder
    duracion?: SortOrder
    contenido?: ContenidoOrderByWithRelationInput
  }

  export type PeliculaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeliculaWhereInput | PeliculaWhereInput[]
    OR?: PeliculaWhereInput[]
    NOT?: PeliculaWhereInput | PeliculaWhereInput[]
    duracion?: IntFilter<"Pelicula"> | number
    contenido?: XOR<ContenidoScalarRelationFilter, ContenidoWhereInput>
  }, "id">

  export type PeliculaOrderByWithAggregationInput = {
    id?: SortOrder
    duracion?: SortOrder
    _count?: PeliculaCountOrderByAggregateInput
    _avg?: PeliculaAvgOrderByAggregateInput
    _max?: PeliculaMaxOrderByAggregateInput
    _min?: PeliculaMinOrderByAggregateInput
    _sum?: PeliculaSumOrderByAggregateInput
  }

  export type PeliculaScalarWhereWithAggregatesInput = {
    AND?: PeliculaScalarWhereWithAggregatesInput | PeliculaScalarWhereWithAggregatesInput[]
    OR?: PeliculaScalarWhereWithAggregatesInput[]
    NOT?: PeliculaScalarWhereWithAggregatesInput | PeliculaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pelicula"> | number
    duracion?: IntWithAggregatesFilter<"Pelicula"> | number
  }

  export type SerieWhereInput = {
    AND?: SerieWhereInput | SerieWhereInput[]
    OR?: SerieWhereInput[]
    NOT?: SerieWhereInput | SerieWhereInput[]
    id?: IntFilter<"Serie"> | number
    temporadas?: IntFilter<"Serie"> | number
    contenido?: XOR<ContenidoScalarRelationFilter, ContenidoWhereInput>
  }

  export type SerieOrderByWithRelationInput = {
    id?: SortOrder
    temporadas?: SortOrder
    contenido?: ContenidoOrderByWithRelationInput
  }

  export type SerieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SerieWhereInput | SerieWhereInput[]
    OR?: SerieWhereInput[]
    NOT?: SerieWhereInput | SerieWhereInput[]
    temporadas?: IntFilter<"Serie"> | number
    contenido?: XOR<ContenidoScalarRelationFilter, ContenidoWhereInput>
  }, "id">

  export type SerieOrderByWithAggregationInput = {
    id?: SortOrder
    temporadas?: SortOrder
    _count?: SerieCountOrderByAggregateInput
    _avg?: SerieAvgOrderByAggregateInput
    _max?: SerieMaxOrderByAggregateInput
    _min?: SerieMinOrderByAggregateInput
    _sum?: SerieSumOrderByAggregateInput
  }

  export type SerieScalarWhereWithAggregatesInput = {
    AND?: SerieScalarWhereWithAggregatesInput | SerieScalarWhereWithAggregatesInput[]
    OR?: SerieScalarWhereWithAggregatesInput[]
    NOT?: SerieScalarWhereWithAggregatesInput | SerieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Serie"> | number
    temporadas?: IntWithAggregatesFilter<"Serie"> | number
  }

  export type ContenidoCreateInput = {
    titulo: string
    descripcion: string
    tipo: $Enums.TipoContenido
    pelicula?: PeliculaCreateNestedOneWithoutContenidoInput
    serie?: SerieCreateNestedOneWithoutContenidoInput
  }

  export type ContenidoUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion: string
    tipo: $Enums.TipoContenido
    pelicula?: PeliculaUncheckedCreateNestedOneWithoutContenidoInput
    serie?: SerieUncheckedCreateNestedOneWithoutContenidoInput
  }

  export type ContenidoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContenidoFieldUpdateOperationsInput | $Enums.TipoContenido
    pelicula?: PeliculaUpdateOneWithoutContenidoNestedInput
    serie?: SerieUpdateOneWithoutContenidoNestedInput
  }

  export type ContenidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContenidoFieldUpdateOperationsInput | $Enums.TipoContenido
    pelicula?: PeliculaUncheckedUpdateOneWithoutContenidoNestedInput
    serie?: SerieUncheckedUpdateOneWithoutContenidoNestedInput
  }

  export type ContenidoCreateManyInput = {
    id?: number
    titulo: string
    descripcion: string
    tipo: $Enums.TipoContenido
  }

  export type ContenidoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContenidoFieldUpdateOperationsInput | $Enums.TipoContenido
  }

  export type ContenidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContenidoFieldUpdateOperationsInput | $Enums.TipoContenido
  }

  export type PeliculaCreateInput = {
    duracion: number
    contenido: ContenidoCreateNestedOneWithoutPeliculaInput
  }

  export type PeliculaUncheckedCreateInput = {
    id: number
    duracion: number
  }

  export type PeliculaUpdateInput = {
    duracion?: IntFieldUpdateOperationsInput | number
    contenido?: ContenidoUpdateOneRequiredWithoutPeliculaNestedInput
  }

  export type PeliculaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    duracion?: IntFieldUpdateOperationsInput | number
  }

  export type PeliculaCreateManyInput = {
    id: number
    duracion: number
  }

  export type PeliculaUpdateManyMutationInput = {
    duracion?: IntFieldUpdateOperationsInput | number
  }

  export type PeliculaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    duracion?: IntFieldUpdateOperationsInput | number
  }

  export type SerieCreateInput = {
    temporadas: number
    contenido: ContenidoCreateNestedOneWithoutSerieInput
  }

  export type SerieUncheckedCreateInput = {
    id: number
    temporadas: number
  }

  export type SerieUpdateInput = {
    temporadas?: IntFieldUpdateOperationsInput | number
    contenido?: ContenidoUpdateOneRequiredWithoutSerieNestedInput
  }

  export type SerieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    temporadas?: IntFieldUpdateOperationsInput | number
  }

  export type SerieCreateManyInput = {
    id: number
    temporadas: number
  }

  export type SerieUpdateManyMutationInput = {
    temporadas?: IntFieldUpdateOperationsInput | number
  }

  export type SerieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    temporadas?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTipoContenidoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoContenido | EnumTipoContenidoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoContenido[] | ListEnumTipoContenidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoContenido[] | ListEnumTipoContenidoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoContenidoFilter<$PrismaModel> | $Enums.TipoContenido
  }

  export type PeliculaNullableScalarRelationFilter = {
    is?: PeliculaWhereInput | null
    isNot?: PeliculaWhereInput | null
  }

  export type SerieNullableScalarRelationFilter = {
    is?: SerieWhereInput | null
    isNot?: SerieWhereInput | null
  }

  export type ContenidoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
  }

  export type ContenidoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContenidoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
  }

  export type ContenidoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
  }

  export type ContenidoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTipoContenidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoContenido | EnumTipoContenidoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoContenido[] | ListEnumTipoContenidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoContenido[] | ListEnumTipoContenidoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoContenidoWithAggregatesFilter<$PrismaModel> | $Enums.TipoContenido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoContenidoFilter<$PrismaModel>
    _max?: NestedEnumTipoContenidoFilter<$PrismaModel>
  }

  export type ContenidoScalarRelationFilter = {
    is?: ContenidoWhereInput
    isNot?: ContenidoWhereInput
  }

  export type PeliculaCountOrderByAggregateInput = {
    id?: SortOrder
    duracion?: SortOrder
  }

  export type PeliculaAvgOrderByAggregateInput = {
    id?: SortOrder
    duracion?: SortOrder
  }

  export type PeliculaMaxOrderByAggregateInput = {
    id?: SortOrder
    duracion?: SortOrder
  }

  export type PeliculaMinOrderByAggregateInput = {
    id?: SortOrder
    duracion?: SortOrder
  }

  export type PeliculaSumOrderByAggregateInput = {
    id?: SortOrder
    duracion?: SortOrder
  }

  export type SerieCountOrderByAggregateInput = {
    id?: SortOrder
    temporadas?: SortOrder
  }

  export type SerieAvgOrderByAggregateInput = {
    id?: SortOrder
    temporadas?: SortOrder
  }

  export type SerieMaxOrderByAggregateInput = {
    id?: SortOrder
    temporadas?: SortOrder
  }

  export type SerieMinOrderByAggregateInput = {
    id?: SortOrder
    temporadas?: SortOrder
  }

  export type SerieSumOrderByAggregateInput = {
    id?: SortOrder
    temporadas?: SortOrder
  }

  export type PeliculaCreateNestedOneWithoutContenidoInput = {
    create?: XOR<PeliculaCreateWithoutContenidoInput, PeliculaUncheckedCreateWithoutContenidoInput>
    connectOrCreate?: PeliculaCreateOrConnectWithoutContenidoInput
    connect?: PeliculaWhereUniqueInput
  }

  export type SerieCreateNestedOneWithoutContenidoInput = {
    create?: XOR<SerieCreateWithoutContenidoInput, SerieUncheckedCreateWithoutContenidoInput>
    connectOrCreate?: SerieCreateOrConnectWithoutContenidoInput
    connect?: SerieWhereUniqueInput
  }

  export type PeliculaUncheckedCreateNestedOneWithoutContenidoInput = {
    create?: XOR<PeliculaCreateWithoutContenidoInput, PeliculaUncheckedCreateWithoutContenidoInput>
    connectOrCreate?: PeliculaCreateOrConnectWithoutContenidoInput
    connect?: PeliculaWhereUniqueInput
  }

  export type SerieUncheckedCreateNestedOneWithoutContenidoInput = {
    create?: XOR<SerieCreateWithoutContenidoInput, SerieUncheckedCreateWithoutContenidoInput>
    connectOrCreate?: SerieCreateOrConnectWithoutContenidoInput
    connect?: SerieWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTipoContenidoFieldUpdateOperationsInput = {
    set?: $Enums.TipoContenido
  }

  export type PeliculaUpdateOneWithoutContenidoNestedInput = {
    create?: XOR<PeliculaCreateWithoutContenidoInput, PeliculaUncheckedCreateWithoutContenidoInput>
    connectOrCreate?: PeliculaCreateOrConnectWithoutContenidoInput
    upsert?: PeliculaUpsertWithoutContenidoInput
    disconnect?: PeliculaWhereInput | boolean
    delete?: PeliculaWhereInput | boolean
    connect?: PeliculaWhereUniqueInput
    update?: XOR<XOR<PeliculaUpdateToOneWithWhereWithoutContenidoInput, PeliculaUpdateWithoutContenidoInput>, PeliculaUncheckedUpdateWithoutContenidoInput>
  }

  export type SerieUpdateOneWithoutContenidoNestedInput = {
    create?: XOR<SerieCreateWithoutContenidoInput, SerieUncheckedCreateWithoutContenidoInput>
    connectOrCreate?: SerieCreateOrConnectWithoutContenidoInput
    upsert?: SerieUpsertWithoutContenidoInput
    disconnect?: SerieWhereInput | boolean
    delete?: SerieWhereInput | boolean
    connect?: SerieWhereUniqueInput
    update?: XOR<XOR<SerieUpdateToOneWithWhereWithoutContenidoInput, SerieUpdateWithoutContenidoInput>, SerieUncheckedUpdateWithoutContenidoInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PeliculaUncheckedUpdateOneWithoutContenidoNestedInput = {
    create?: XOR<PeliculaCreateWithoutContenidoInput, PeliculaUncheckedCreateWithoutContenidoInput>
    connectOrCreate?: PeliculaCreateOrConnectWithoutContenidoInput
    upsert?: PeliculaUpsertWithoutContenidoInput
    disconnect?: PeliculaWhereInput | boolean
    delete?: PeliculaWhereInput | boolean
    connect?: PeliculaWhereUniqueInput
    update?: XOR<XOR<PeliculaUpdateToOneWithWhereWithoutContenidoInput, PeliculaUpdateWithoutContenidoInput>, PeliculaUncheckedUpdateWithoutContenidoInput>
  }

  export type SerieUncheckedUpdateOneWithoutContenidoNestedInput = {
    create?: XOR<SerieCreateWithoutContenidoInput, SerieUncheckedCreateWithoutContenidoInput>
    connectOrCreate?: SerieCreateOrConnectWithoutContenidoInput
    upsert?: SerieUpsertWithoutContenidoInput
    disconnect?: SerieWhereInput | boolean
    delete?: SerieWhereInput | boolean
    connect?: SerieWhereUniqueInput
    update?: XOR<XOR<SerieUpdateToOneWithWhereWithoutContenidoInput, SerieUpdateWithoutContenidoInput>, SerieUncheckedUpdateWithoutContenidoInput>
  }

  export type ContenidoCreateNestedOneWithoutPeliculaInput = {
    create?: XOR<ContenidoCreateWithoutPeliculaInput, ContenidoUncheckedCreateWithoutPeliculaInput>
    connectOrCreate?: ContenidoCreateOrConnectWithoutPeliculaInput
    connect?: ContenidoWhereUniqueInput
  }

  export type ContenidoUpdateOneRequiredWithoutPeliculaNestedInput = {
    create?: XOR<ContenidoCreateWithoutPeliculaInput, ContenidoUncheckedCreateWithoutPeliculaInput>
    connectOrCreate?: ContenidoCreateOrConnectWithoutPeliculaInput
    upsert?: ContenidoUpsertWithoutPeliculaInput
    connect?: ContenidoWhereUniqueInput
    update?: XOR<XOR<ContenidoUpdateToOneWithWhereWithoutPeliculaInput, ContenidoUpdateWithoutPeliculaInput>, ContenidoUncheckedUpdateWithoutPeliculaInput>
  }

  export type ContenidoCreateNestedOneWithoutSerieInput = {
    create?: XOR<ContenidoCreateWithoutSerieInput, ContenidoUncheckedCreateWithoutSerieInput>
    connectOrCreate?: ContenidoCreateOrConnectWithoutSerieInput
    connect?: ContenidoWhereUniqueInput
  }

  export type ContenidoUpdateOneRequiredWithoutSerieNestedInput = {
    create?: XOR<ContenidoCreateWithoutSerieInput, ContenidoUncheckedCreateWithoutSerieInput>
    connectOrCreate?: ContenidoCreateOrConnectWithoutSerieInput
    upsert?: ContenidoUpsertWithoutSerieInput
    connect?: ContenidoWhereUniqueInput
    update?: XOR<XOR<ContenidoUpdateToOneWithWhereWithoutSerieInput, ContenidoUpdateWithoutSerieInput>, ContenidoUncheckedUpdateWithoutSerieInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTipoContenidoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoContenido | EnumTipoContenidoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoContenido[] | ListEnumTipoContenidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoContenido[] | ListEnumTipoContenidoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoContenidoFilter<$PrismaModel> | $Enums.TipoContenido
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumTipoContenidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoContenido | EnumTipoContenidoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoContenido[] | ListEnumTipoContenidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoContenido[] | ListEnumTipoContenidoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoContenidoWithAggregatesFilter<$PrismaModel> | $Enums.TipoContenido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoContenidoFilter<$PrismaModel>
    _max?: NestedEnumTipoContenidoFilter<$PrismaModel>
  }

  export type PeliculaCreateWithoutContenidoInput = {
    duracion: number
  }

  export type PeliculaUncheckedCreateWithoutContenidoInput = {
    duracion: number
  }

  export type PeliculaCreateOrConnectWithoutContenidoInput = {
    where: PeliculaWhereUniqueInput
    create: XOR<PeliculaCreateWithoutContenidoInput, PeliculaUncheckedCreateWithoutContenidoInput>
  }

  export type SerieCreateWithoutContenidoInput = {
    temporadas: number
  }

  export type SerieUncheckedCreateWithoutContenidoInput = {
    temporadas: number
  }

  export type SerieCreateOrConnectWithoutContenidoInput = {
    where: SerieWhereUniqueInput
    create: XOR<SerieCreateWithoutContenidoInput, SerieUncheckedCreateWithoutContenidoInput>
  }

  export type PeliculaUpsertWithoutContenidoInput = {
    update: XOR<PeliculaUpdateWithoutContenidoInput, PeliculaUncheckedUpdateWithoutContenidoInput>
    create: XOR<PeliculaCreateWithoutContenidoInput, PeliculaUncheckedCreateWithoutContenidoInput>
    where?: PeliculaWhereInput
  }

  export type PeliculaUpdateToOneWithWhereWithoutContenidoInput = {
    where?: PeliculaWhereInput
    data: XOR<PeliculaUpdateWithoutContenidoInput, PeliculaUncheckedUpdateWithoutContenidoInput>
  }

  export type PeliculaUpdateWithoutContenidoInput = {
    duracion?: IntFieldUpdateOperationsInput | number
  }

  export type PeliculaUncheckedUpdateWithoutContenidoInput = {
    duracion?: IntFieldUpdateOperationsInput | number
  }

  export type SerieUpsertWithoutContenidoInput = {
    update: XOR<SerieUpdateWithoutContenidoInput, SerieUncheckedUpdateWithoutContenidoInput>
    create: XOR<SerieCreateWithoutContenidoInput, SerieUncheckedCreateWithoutContenidoInput>
    where?: SerieWhereInput
  }

  export type SerieUpdateToOneWithWhereWithoutContenidoInput = {
    where?: SerieWhereInput
    data: XOR<SerieUpdateWithoutContenidoInput, SerieUncheckedUpdateWithoutContenidoInput>
  }

  export type SerieUpdateWithoutContenidoInput = {
    temporadas?: IntFieldUpdateOperationsInput | number
  }

  export type SerieUncheckedUpdateWithoutContenidoInput = {
    temporadas?: IntFieldUpdateOperationsInput | number
  }

  export type ContenidoCreateWithoutPeliculaInput = {
    titulo: string
    descripcion: string
    tipo: $Enums.TipoContenido
    serie?: SerieCreateNestedOneWithoutContenidoInput
  }

  export type ContenidoUncheckedCreateWithoutPeliculaInput = {
    id?: number
    titulo: string
    descripcion: string
    tipo: $Enums.TipoContenido
    serie?: SerieUncheckedCreateNestedOneWithoutContenidoInput
  }

  export type ContenidoCreateOrConnectWithoutPeliculaInput = {
    where: ContenidoWhereUniqueInput
    create: XOR<ContenidoCreateWithoutPeliculaInput, ContenidoUncheckedCreateWithoutPeliculaInput>
  }

  export type ContenidoUpsertWithoutPeliculaInput = {
    update: XOR<ContenidoUpdateWithoutPeliculaInput, ContenidoUncheckedUpdateWithoutPeliculaInput>
    create: XOR<ContenidoCreateWithoutPeliculaInput, ContenidoUncheckedCreateWithoutPeliculaInput>
    where?: ContenidoWhereInput
  }

  export type ContenidoUpdateToOneWithWhereWithoutPeliculaInput = {
    where?: ContenidoWhereInput
    data: XOR<ContenidoUpdateWithoutPeliculaInput, ContenidoUncheckedUpdateWithoutPeliculaInput>
  }

  export type ContenidoUpdateWithoutPeliculaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContenidoFieldUpdateOperationsInput | $Enums.TipoContenido
    serie?: SerieUpdateOneWithoutContenidoNestedInput
  }

  export type ContenidoUncheckedUpdateWithoutPeliculaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContenidoFieldUpdateOperationsInput | $Enums.TipoContenido
    serie?: SerieUncheckedUpdateOneWithoutContenidoNestedInput
  }

  export type ContenidoCreateWithoutSerieInput = {
    titulo: string
    descripcion: string
    tipo: $Enums.TipoContenido
    pelicula?: PeliculaCreateNestedOneWithoutContenidoInput
  }

  export type ContenidoUncheckedCreateWithoutSerieInput = {
    id?: number
    titulo: string
    descripcion: string
    tipo: $Enums.TipoContenido
    pelicula?: PeliculaUncheckedCreateNestedOneWithoutContenidoInput
  }

  export type ContenidoCreateOrConnectWithoutSerieInput = {
    where: ContenidoWhereUniqueInput
    create: XOR<ContenidoCreateWithoutSerieInput, ContenidoUncheckedCreateWithoutSerieInput>
  }

  export type ContenidoUpsertWithoutSerieInput = {
    update: XOR<ContenidoUpdateWithoutSerieInput, ContenidoUncheckedUpdateWithoutSerieInput>
    create: XOR<ContenidoCreateWithoutSerieInput, ContenidoUncheckedCreateWithoutSerieInput>
    where?: ContenidoWhereInput
  }

  export type ContenidoUpdateToOneWithWhereWithoutSerieInput = {
    where?: ContenidoWhereInput
    data: XOR<ContenidoUpdateWithoutSerieInput, ContenidoUncheckedUpdateWithoutSerieInput>
  }

  export type ContenidoUpdateWithoutSerieInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContenidoFieldUpdateOperationsInput | $Enums.TipoContenido
    pelicula?: PeliculaUpdateOneWithoutContenidoNestedInput
  }

  export type ContenidoUncheckedUpdateWithoutSerieInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoContenidoFieldUpdateOperationsInput | $Enums.TipoContenido
    pelicula?: PeliculaUncheckedUpdateOneWithoutContenidoNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}