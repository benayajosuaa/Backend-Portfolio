
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model journeys
 * 
 */
export type journeys = $Result.DefaultSelection<Prisma.$journeysPayload>
/**
 * Model works
 * 
 */
export type works = $Result.DefaultSelection<Prisma.$worksPayload>
/**
 * Model contact_messages
 * 
 */
export type contact_messages = $Result.DefaultSelection<Prisma.$contact_messagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const roleUser: {
  admin: 'admin',
  user: 'user'
};

export type roleUser = (typeof roleUser)[keyof typeof roleUser]


export const typeJourney: {
  Education: 'Education',
  Work: 'Work',
  Organization: 'Organization'
};

export type typeJourney = (typeof typeJourney)[keyof typeof typeJourney]


export const statusWork: {
  Draft: 'Draft',
  Published: 'Published'
};

export type statusWork = (typeof statusWork)[keyof typeof statusWork]


export const statusContact: {
  Unread: 'Unread',
  Read: 'Read',
  Replied: 'Replied',
  Archived: 'Archived'
};

export type statusContact = (typeof statusContact)[keyof typeof statusContact]

}

export type roleUser = $Enums.roleUser

export const roleUser: typeof $Enums.roleUser

export type typeJourney = $Enums.typeJourney

export const typeJourney: typeof $Enums.typeJourney

export type statusWork = $Enums.statusWork

export const statusWork: typeof $Enums.statusWork

export type statusContact = $Enums.statusContact

export const statusContact: typeof $Enums.statusContact

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.journeys`: Exposes CRUD operations for the **journeys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Journeys
    * const journeys = await prisma.journeys.findMany()
    * ```
    */
  get journeys(): Prisma.journeysDelegate<ExtArgs>;

  /**
   * `prisma.works`: Exposes CRUD operations for the **works** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.works.findMany()
    * ```
    */
  get works(): Prisma.worksDelegate<ExtArgs>;

  /**
   * `prisma.contact_messages`: Exposes CRUD operations for the **contact_messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contact_messages
    * const contact_messages = await prisma.contact_messages.findMany()
    * ```
    */
  get contact_messages(): Prisma.contact_messagesDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    users: 'users',
    journeys: 'journeys',
    works: 'works',
    contact_messages: 'contact_messages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "journeys" | "works" | "contact_messages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      journeys: {
        payload: Prisma.$journeysPayload<ExtArgs>
        fields: Prisma.journeysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.journeysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journeysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.journeysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journeysPayload>
          }
          findFirst: {
            args: Prisma.journeysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journeysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.journeysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journeysPayload>
          }
          findMany: {
            args: Prisma.journeysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journeysPayload>[]
          }
          create: {
            args: Prisma.journeysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journeysPayload>
          }
          createMany: {
            args: Prisma.journeysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.journeysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journeysPayload>[]
          }
          delete: {
            args: Prisma.journeysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journeysPayload>
          }
          update: {
            args: Prisma.journeysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journeysPayload>
          }
          deleteMany: {
            args: Prisma.journeysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.journeysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.journeysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$journeysPayload>
          }
          aggregate: {
            args: Prisma.JourneysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJourneys>
          }
          groupBy: {
            args: Prisma.journeysGroupByArgs<ExtArgs>
            result: $Utils.Optional<JourneysGroupByOutputType>[]
          }
          count: {
            args: Prisma.journeysCountArgs<ExtArgs>
            result: $Utils.Optional<JourneysCountAggregateOutputType> | number
          }
        }
      }
      works: {
        payload: Prisma.$worksPayload<ExtArgs>
        fields: Prisma.worksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.worksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.worksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worksPayload>
          }
          findFirst: {
            args: Prisma.worksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.worksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worksPayload>
          }
          findMany: {
            args: Prisma.worksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worksPayload>[]
          }
          create: {
            args: Prisma.worksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worksPayload>
          }
          createMany: {
            args: Prisma.worksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.worksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worksPayload>[]
          }
          delete: {
            args: Prisma.worksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worksPayload>
          }
          update: {
            args: Prisma.worksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worksPayload>
          }
          deleteMany: {
            args: Prisma.worksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.worksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.worksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worksPayload>
          }
          aggregate: {
            args: Prisma.WorksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorks>
          }
          groupBy: {
            args: Prisma.worksGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorksGroupByOutputType>[]
          }
          count: {
            args: Prisma.worksCountArgs<ExtArgs>
            result: $Utils.Optional<WorksCountAggregateOutputType> | number
          }
        }
      }
      contact_messages: {
        payload: Prisma.$contact_messagesPayload<ExtArgs>
        fields: Prisma.contact_messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contact_messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contact_messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          findFirst: {
            args: Prisma.contact_messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contact_messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          findMany: {
            args: Prisma.contact_messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>[]
          }
          create: {
            args: Prisma.contact_messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          createMany: {
            args: Prisma.contact_messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contact_messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>[]
          }
          delete: {
            args: Prisma.contact_messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          update: {
            args: Prisma.contact_messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          deleteMany: {
            args: Prisma.contact_messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contact_messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contact_messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          aggregate: {
            args: Prisma.Contact_messagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact_messages>
          }
          groupBy: {
            args: Prisma.contact_messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Contact_messagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.contact_messagesCountArgs<ExtArgs>
            result: $Utils.Optional<Contact_messagesCountAggregateOutputType> | number
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
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    role: $Enums.roleUser | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    role: $Enums.roleUser | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    role: $Enums.roleUser
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      role: $Enums.roleUser
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'roleUser'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
  }


  /**
   * Model journeys
   */

  export type AggregateJourneys = {
    _count: JourneysCountAggregateOutputType | null
    _avg: JourneysAvgAggregateOutputType | null
    _sum: JourneysSumAggregateOutputType | null
    _min: JourneysMinAggregateOutputType | null
    _max: JourneysMaxAggregateOutputType | null
  }

  export type JourneysAvgAggregateOutputType = {
    id: number | null
    year: number | null
    order_index: number | null
  }

  export type JourneysSumAggregateOutputType = {
    id: number | null
    year: number | null
    order_index: number | null
  }

  export type JourneysMinAggregateOutputType = {
    id: number | null
    type: $Enums.typeJourney | null
    title: string | null
    excerpt: string | null
    cover_image: string | null
    year: number | null
    content: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JourneysMaxAggregateOutputType = {
    id: number | null
    type: $Enums.typeJourney | null
    title: string | null
    excerpt: string | null
    cover_image: string | null
    year: number | null
    content: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JourneysCountAggregateOutputType = {
    id: number
    type: number
    title: number
    excerpt: number
    cover_image: number
    year: number
    content: number
    order_index: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type JourneysAvgAggregateInputType = {
    id?: true
    year?: true
    order_index?: true
  }

  export type JourneysSumAggregateInputType = {
    id?: true
    year?: true
    order_index?: true
  }

  export type JourneysMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    excerpt?: true
    cover_image?: true
    year?: true
    content?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type JourneysMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    excerpt?: true
    cover_image?: true
    year?: true
    content?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type JourneysCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    excerpt?: true
    cover_image?: true
    year?: true
    content?: true
    order_index?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type JourneysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which journeys to aggregate.
     */
    where?: journeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of journeys to fetch.
     */
    orderBy?: journeysOrderByWithRelationInput | journeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: journeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned journeys
    **/
    _count?: true | JourneysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JourneysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JourneysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JourneysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JourneysMaxAggregateInputType
  }

  export type GetJourneysAggregateType<T extends JourneysAggregateArgs> = {
        [P in keyof T & keyof AggregateJourneys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJourneys[P]>
      : GetScalarType<T[P], AggregateJourneys[P]>
  }




  export type journeysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: journeysWhereInput
    orderBy?: journeysOrderByWithAggregationInput | journeysOrderByWithAggregationInput[]
    by: JourneysScalarFieldEnum[] | JourneysScalarFieldEnum
    having?: journeysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JourneysCountAggregateInputType | true
    _avg?: JourneysAvgAggregateInputType
    _sum?: JourneysSumAggregateInputType
    _min?: JourneysMinAggregateInputType
    _max?: JourneysMaxAggregateInputType
  }

  export type JourneysGroupByOutputType = {
    id: number
    type: $Enums.typeJourney
    title: string
    excerpt: string
    cover_image: string
    year: number
    content: string | null
    order_index: number
    created_at: Date
    updated_at: Date
    _count: JourneysCountAggregateOutputType | null
    _avg: JourneysAvgAggregateOutputType | null
    _sum: JourneysSumAggregateOutputType | null
    _min: JourneysMinAggregateOutputType | null
    _max: JourneysMaxAggregateOutputType | null
  }

  type GetJourneysGroupByPayload<T extends journeysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JourneysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JourneysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JourneysGroupByOutputType[P]>
            : GetScalarType<T[P], JourneysGroupByOutputType[P]>
        }
      >
    >


  export type journeysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    excerpt?: boolean
    cover_image?: boolean
    year?: boolean
    content?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["journeys"]>

  export type journeysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    excerpt?: boolean
    cover_image?: boolean
    year?: boolean
    content?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["journeys"]>

  export type journeysSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    excerpt?: boolean
    cover_image?: boolean
    year?: boolean
    content?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $journeysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "journeys"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.typeJourney
      title: string
      excerpt: string
      cover_image: string
      year: number
      content: string | null
      order_index: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["journeys"]>
    composites: {}
  }

  type journeysGetPayload<S extends boolean | null | undefined | journeysDefaultArgs> = $Result.GetResult<Prisma.$journeysPayload, S>

  type journeysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<journeysFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JourneysCountAggregateInputType | true
    }

  export interface journeysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['journeys'], meta: { name: 'journeys' } }
    /**
     * Find zero or one Journeys that matches the filter.
     * @param {journeysFindUniqueArgs} args - Arguments to find a Journeys
     * @example
     * // Get one Journeys
     * const journeys = await prisma.journeys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends journeysFindUniqueArgs>(args: SelectSubset<T, journeysFindUniqueArgs<ExtArgs>>): Prisma__journeysClient<$Result.GetResult<Prisma.$journeysPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Journeys that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {journeysFindUniqueOrThrowArgs} args - Arguments to find a Journeys
     * @example
     * // Get one Journeys
     * const journeys = await prisma.journeys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends journeysFindUniqueOrThrowArgs>(args: SelectSubset<T, journeysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__journeysClient<$Result.GetResult<Prisma.$journeysPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Journeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeysFindFirstArgs} args - Arguments to find a Journeys
     * @example
     * // Get one Journeys
     * const journeys = await prisma.journeys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends journeysFindFirstArgs>(args?: SelectSubset<T, journeysFindFirstArgs<ExtArgs>>): Prisma__journeysClient<$Result.GetResult<Prisma.$journeysPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Journeys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeysFindFirstOrThrowArgs} args - Arguments to find a Journeys
     * @example
     * // Get one Journeys
     * const journeys = await prisma.journeys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends journeysFindFirstOrThrowArgs>(args?: SelectSubset<T, journeysFindFirstOrThrowArgs<ExtArgs>>): Prisma__journeysClient<$Result.GetResult<Prisma.$journeysPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Journeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Journeys
     * const journeys = await prisma.journeys.findMany()
     * 
     * // Get first 10 Journeys
     * const journeys = await prisma.journeys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journeysWithIdOnly = await prisma.journeys.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends journeysFindManyArgs>(args?: SelectSubset<T, journeysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journeysPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Journeys.
     * @param {journeysCreateArgs} args - Arguments to create a Journeys.
     * @example
     * // Create one Journeys
     * const Journeys = await prisma.journeys.create({
     *   data: {
     *     // ... data to create a Journeys
     *   }
     * })
     * 
     */
    create<T extends journeysCreateArgs>(args: SelectSubset<T, journeysCreateArgs<ExtArgs>>): Prisma__journeysClient<$Result.GetResult<Prisma.$journeysPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Journeys.
     * @param {journeysCreateManyArgs} args - Arguments to create many Journeys.
     * @example
     * // Create many Journeys
     * const journeys = await prisma.journeys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends journeysCreateManyArgs>(args?: SelectSubset<T, journeysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Journeys and returns the data saved in the database.
     * @param {journeysCreateManyAndReturnArgs} args - Arguments to create many Journeys.
     * @example
     * // Create many Journeys
     * const journeys = await prisma.journeys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Journeys and only return the `id`
     * const journeysWithIdOnly = await prisma.journeys.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends journeysCreateManyAndReturnArgs>(args?: SelectSubset<T, journeysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journeysPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Journeys.
     * @param {journeysDeleteArgs} args - Arguments to delete one Journeys.
     * @example
     * // Delete one Journeys
     * const Journeys = await prisma.journeys.delete({
     *   where: {
     *     // ... filter to delete one Journeys
     *   }
     * })
     * 
     */
    delete<T extends journeysDeleteArgs>(args: SelectSubset<T, journeysDeleteArgs<ExtArgs>>): Prisma__journeysClient<$Result.GetResult<Prisma.$journeysPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Journeys.
     * @param {journeysUpdateArgs} args - Arguments to update one Journeys.
     * @example
     * // Update one Journeys
     * const journeys = await prisma.journeys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends journeysUpdateArgs>(args: SelectSubset<T, journeysUpdateArgs<ExtArgs>>): Prisma__journeysClient<$Result.GetResult<Prisma.$journeysPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Journeys.
     * @param {journeysDeleteManyArgs} args - Arguments to filter Journeys to delete.
     * @example
     * // Delete a few Journeys
     * const { count } = await prisma.journeys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends journeysDeleteManyArgs>(args?: SelectSubset<T, journeysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Journeys
     * const journeys = await prisma.journeys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends journeysUpdateManyArgs>(args: SelectSubset<T, journeysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Journeys.
     * @param {journeysUpsertArgs} args - Arguments to update or create a Journeys.
     * @example
     * // Update or create a Journeys
     * const journeys = await prisma.journeys.upsert({
     *   create: {
     *     // ... data to create a Journeys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Journeys we want to update
     *   }
     * })
     */
    upsert<T extends journeysUpsertArgs>(args: SelectSubset<T, journeysUpsertArgs<ExtArgs>>): Prisma__journeysClient<$Result.GetResult<Prisma.$journeysPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeysCountArgs} args - Arguments to filter Journeys to count.
     * @example
     * // Count the number of Journeys
     * const count = await prisma.journeys.count({
     *   where: {
     *     // ... the filter for the Journeys we want to count
     *   }
     * })
    **/
    count<T extends journeysCountArgs>(
      args?: Subset<T, journeysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JourneysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JourneysAggregateArgs>(args: Subset<T, JourneysAggregateArgs>): Prisma.PrismaPromise<GetJourneysAggregateType<T>>

    /**
     * Group by Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeysGroupByArgs} args - Group by arguments.
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
      T extends journeysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: journeysGroupByArgs['orderBy'] }
        : { orderBy?: journeysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, journeysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJourneysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the journeys model
   */
  readonly fields: journeysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for journeys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__journeysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the journeys model
   */ 
  interface journeysFieldRefs {
    readonly id: FieldRef<"journeys", 'Int'>
    readonly type: FieldRef<"journeys", 'typeJourney'>
    readonly title: FieldRef<"journeys", 'String'>
    readonly excerpt: FieldRef<"journeys", 'String'>
    readonly cover_image: FieldRef<"journeys", 'String'>
    readonly year: FieldRef<"journeys", 'Int'>
    readonly content: FieldRef<"journeys", 'String'>
    readonly order_index: FieldRef<"journeys", 'Int'>
    readonly created_at: FieldRef<"journeys", 'DateTime'>
    readonly updated_at: FieldRef<"journeys", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * journeys findUnique
   */
  export type journeysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelect<ExtArgs> | null
    /**
     * Filter, which journeys to fetch.
     */
    where: journeysWhereUniqueInput
  }

  /**
   * journeys findUniqueOrThrow
   */
  export type journeysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelect<ExtArgs> | null
    /**
     * Filter, which journeys to fetch.
     */
    where: journeysWhereUniqueInput
  }

  /**
   * journeys findFirst
   */
  export type journeysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelect<ExtArgs> | null
    /**
     * Filter, which journeys to fetch.
     */
    where?: journeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of journeys to fetch.
     */
    orderBy?: journeysOrderByWithRelationInput | journeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for journeys.
     */
    cursor?: journeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of journeys.
     */
    distinct?: JourneysScalarFieldEnum | JourneysScalarFieldEnum[]
  }

  /**
   * journeys findFirstOrThrow
   */
  export type journeysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelect<ExtArgs> | null
    /**
     * Filter, which journeys to fetch.
     */
    where?: journeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of journeys to fetch.
     */
    orderBy?: journeysOrderByWithRelationInput | journeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for journeys.
     */
    cursor?: journeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of journeys.
     */
    distinct?: JourneysScalarFieldEnum | JourneysScalarFieldEnum[]
  }

  /**
   * journeys findMany
   */
  export type journeysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelect<ExtArgs> | null
    /**
     * Filter, which journeys to fetch.
     */
    where?: journeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of journeys to fetch.
     */
    orderBy?: journeysOrderByWithRelationInput | journeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing journeys.
     */
    cursor?: journeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` journeys.
     */
    skip?: number
    distinct?: JourneysScalarFieldEnum | JourneysScalarFieldEnum[]
  }

  /**
   * journeys create
   */
  export type journeysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelect<ExtArgs> | null
    /**
     * The data needed to create a journeys.
     */
    data: XOR<journeysCreateInput, journeysUncheckedCreateInput>
  }

  /**
   * journeys createMany
   */
  export type journeysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many journeys.
     */
    data: journeysCreateManyInput | journeysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * journeys createManyAndReturn
   */
  export type journeysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many journeys.
     */
    data: journeysCreateManyInput | journeysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * journeys update
   */
  export type journeysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelect<ExtArgs> | null
    /**
     * The data needed to update a journeys.
     */
    data: XOR<journeysUpdateInput, journeysUncheckedUpdateInput>
    /**
     * Choose, which journeys to update.
     */
    where: journeysWhereUniqueInput
  }

  /**
   * journeys updateMany
   */
  export type journeysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update journeys.
     */
    data: XOR<journeysUpdateManyMutationInput, journeysUncheckedUpdateManyInput>
    /**
     * Filter which journeys to update
     */
    where?: journeysWhereInput
  }

  /**
   * journeys upsert
   */
  export type journeysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelect<ExtArgs> | null
    /**
     * The filter to search for the journeys to update in case it exists.
     */
    where: journeysWhereUniqueInput
    /**
     * In case the journeys found by the `where` argument doesn't exist, create a new journeys with this data.
     */
    create: XOR<journeysCreateInput, journeysUncheckedCreateInput>
    /**
     * In case the journeys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<journeysUpdateInput, journeysUncheckedUpdateInput>
  }

  /**
   * journeys delete
   */
  export type journeysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelect<ExtArgs> | null
    /**
     * Filter which journeys to delete.
     */
    where: journeysWhereUniqueInput
  }

  /**
   * journeys deleteMany
   */
  export type journeysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which journeys to delete
     */
    where?: journeysWhereInput
  }

  /**
   * journeys without action
   */
  export type journeysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journeys
     */
    select?: journeysSelect<ExtArgs> | null
  }


  /**
   * Model works
   */

  export type AggregateWorks = {
    _count: WorksCountAggregateOutputType | null
    _avg: WorksAvgAggregateOutputType | null
    _sum: WorksSumAggregateOutputType | null
    _min: WorksMinAggregateOutputType | null
    _max: WorksMaxAggregateOutputType | null
  }

  export type WorksAvgAggregateOutputType = {
    id: number | null
    order_index: number | null
  }

  export type WorksSumAggregateOutputType = {
    id: number | null
    order_index: number | null
  }

  export type WorksMinAggregateOutputType = {
    id: number | null
    title: string | null
    excerpt: string | null
    cover_image: string | null
    github_url: string | null
    demo_url: string | null
    drive_url: string | null
    published_at: Date | null
    status: $Enums.statusWork | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorksMaxAggregateOutputType = {
    id: number | null
    title: string | null
    excerpt: string | null
    cover_image: string | null
    github_url: string | null
    demo_url: string | null
    drive_url: string | null
    published_at: Date | null
    status: $Enums.statusWork | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorksCountAggregateOutputType = {
    id: number
    title: number
    excerpt: number
    cover_image: number
    github_url: number
    demo_url: number
    drive_url: number
    published_at: number
    status: number
    order_index: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WorksAvgAggregateInputType = {
    id?: true
    order_index?: true
  }

  export type WorksSumAggregateInputType = {
    id?: true
    order_index?: true
  }

  export type WorksMinAggregateInputType = {
    id?: true
    title?: true
    excerpt?: true
    cover_image?: true
    github_url?: true
    demo_url?: true
    drive_url?: true
    published_at?: true
    status?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type WorksMaxAggregateInputType = {
    id?: true
    title?: true
    excerpt?: true
    cover_image?: true
    github_url?: true
    demo_url?: true
    drive_url?: true
    published_at?: true
    status?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type WorksCountAggregateInputType = {
    id?: true
    title?: true
    excerpt?: true
    cover_image?: true
    github_url?: true
    demo_url?: true
    drive_url?: true
    published_at?: true
    status?: true
    order_index?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WorksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which works to aggregate.
     */
    where?: worksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of works to fetch.
     */
    orderBy?: worksOrderByWithRelationInput | worksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: worksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned works
    **/
    _count?: true | WorksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorksMaxAggregateInputType
  }

  export type GetWorksAggregateType<T extends WorksAggregateArgs> = {
        [P in keyof T & keyof AggregateWorks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorks[P]>
      : GetScalarType<T[P], AggregateWorks[P]>
  }




  export type worksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: worksWhereInput
    orderBy?: worksOrderByWithAggregationInput | worksOrderByWithAggregationInput[]
    by: WorksScalarFieldEnum[] | WorksScalarFieldEnum
    having?: worksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorksCountAggregateInputType | true
    _avg?: WorksAvgAggregateInputType
    _sum?: WorksSumAggregateInputType
    _min?: WorksMinAggregateInputType
    _max?: WorksMaxAggregateInputType
  }

  export type WorksGroupByOutputType = {
    id: number
    title: string
    excerpt: string
    cover_image: string
    github_url: string | null
    demo_url: string | null
    drive_url: string | null
    published_at: Date | null
    status: $Enums.statusWork
    order_index: number
    created_at: Date
    updated_at: Date
    _count: WorksCountAggregateOutputType | null
    _avg: WorksAvgAggregateOutputType | null
    _sum: WorksSumAggregateOutputType | null
    _min: WorksMinAggregateOutputType | null
    _max: WorksMaxAggregateOutputType | null
  }

  type GetWorksGroupByPayload<T extends worksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorksGroupByOutputType[P]>
            : GetScalarType<T[P], WorksGroupByOutputType[P]>
        }
      >
    >


  export type worksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    excerpt?: boolean
    cover_image?: boolean
    github_url?: boolean
    demo_url?: boolean
    drive_url?: boolean
    published_at?: boolean
    status?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["works"]>

  export type worksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    excerpt?: boolean
    cover_image?: boolean
    github_url?: boolean
    demo_url?: boolean
    drive_url?: boolean
    published_at?: boolean
    status?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["works"]>

  export type worksSelectScalar = {
    id?: boolean
    title?: boolean
    excerpt?: boolean
    cover_image?: boolean
    github_url?: boolean
    demo_url?: boolean
    drive_url?: boolean
    published_at?: boolean
    status?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $worksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "works"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      excerpt: string
      cover_image: string
      github_url: string | null
      demo_url: string | null
      drive_url: string | null
      published_at: Date | null
      status: $Enums.statusWork
      order_index: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["works"]>
    composites: {}
  }

  type worksGetPayload<S extends boolean | null | undefined | worksDefaultArgs> = $Result.GetResult<Prisma.$worksPayload, S>

  type worksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<worksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorksCountAggregateInputType | true
    }

  export interface worksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['works'], meta: { name: 'works' } }
    /**
     * Find zero or one Works that matches the filter.
     * @param {worksFindUniqueArgs} args - Arguments to find a Works
     * @example
     * // Get one Works
     * const works = await prisma.works.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends worksFindUniqueArgs>(args: SelectSubset<T, worksFindUniqueArgs<ExtArgs>>): Prisma__worksClient<$Result.GetResult<Prisma.$worksPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Works that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {worksFindUniqueOrThrowArgs} args - Arguments to find a Works
     * @example
     * // Get one Works
     * const works = await prisma.works.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends worksFindUniqueOrThrowArgs>(args: SelectSubset<T, worksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__worksClient<$Result.GetResult<Prisma.$worksPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worksFindFirstArgs} args - Arguments to find a Works
     * @example
     * // Get one Works
     * const works = await prisma.works.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends worksFindFirstArgs>(args?: SelectSubset<T, worksFindFirstArgs<ExtArgs>>): Prisma__worksClient<$Result.GetResult<Prisma.$worksPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Works that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worksFindFirstOrThrowArgs} args - Arguments to find a Works
     * @example
     * // Get one Works
     * const works = await prisma.works.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends worksFindFirstOrThrowArgs>(args?: SelectSubset<T, worksFindFirstOrThrowArgs<ExtArgs>>): Prisma__worksClient<$Result.GetResult<Prisma.$worksPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.works.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.works.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worksWithIdOnly = await prisma.works.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends worksFindManyArgs>(args?: SelectSubset<T, worksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$worksPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Works.
     * @param {worksCreateArgs} args - Arguments to create a Works.
     * @example
     * // Create one Works
     * const Works = await prisma.works.create({
     *   data: {
     *     // ... data to create a Works
     *   }
     * })
     * 
     */
    create<T extends worksCreateArgs>(args: SelectSubset<T, worksCreateArgs<ExtArgs>>): Prisma__worksClient<$Result.GetResult<Prisma.$worksPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Works.
     * @param {worksCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const works = await prisma.works.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends worksCreateManyArgs>(args?: SelectSubset<T, worksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Works and returns the data saved in the database.
     * @param {worksCreateManyAndReturnArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const works = await prisma.works.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Works and only return the `id`
     * const worksWithIdOnly = await prisma.works.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends worksCreateManyAndReturnArgs>(args?: SelectSubset<T, worksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$worksPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Works.
     * @param {worksDeleteArgs} args - Arguments to delete one Works.
     * @example
     * // Delete one Works
     * const Works = await prisma.works.delete({
     *   where: {
     *     // ... filter to delete one Works
     *   }
     * })
     * 
     */
    delete<T extends worksDeleteArgs>(args: SelectSubset<T, worksDeleteArgs<ExtArgs>>): Prisma__worksClient<$Result.GetResult<Prisma.$worksPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Works.
     * @param {worksUpdateArgs} args - Arguments to update one Works.
     * @example
     * // Update one Works
     * const works = await prisma.works.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends worksUpdateArgs>(args: SelectSubset<T, worksUpdateArgs<ExtArgs>>): Prisma__worksClient<$Result.GetResult<Prisma.$worksPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Works.
     * @param {worksDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.works.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends worksDeleteManyArgs>(args?: SelectSubset<T, worksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const works = await prisma.works.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends worksUpdateManyArgs>(args: SelectSubset<T, worksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Works.
     * @param {worksUpsertArgs} args - Arguments to update or create a Works.
     * @example
     * // Update or create a Works
     * const works = await prisma.works.upsert({
     *   create: {
     *     // ... data to create a Works
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Works we want to update
     *   }
     * })
     */
    upsert<T extends worksUpsertArgs>(args: SelectSubset<T, worksUpsertArgs<ExtArgs>>): Prisma__worksClient<$Result.GetResult<Prisma.$worksPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worksCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.works.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends worksCountArgs>(
      args?: Subset<T, worksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorksAggregateArgs>(args: Subset<T, WorksAggregateArgs>): Prisma.PrismaPromise<GetWorksAggregateType<T>>

    /**
     * Group by Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worksGroupByArgs} args - Group by arguments.
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
      T extends worksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: worksGroupByArgs['orderBy'] }
        : { orderBy?: worksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, worksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the works model
   */
  readonly fields: worksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for works.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__worksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the works model
   */ 
  interface worksFieldRefs {
    readonly id: FieldRef<"works", 'Int'>
    readonly title: FieldRef<"works", 'String'>
    readonly excerpt: FieldRef<"works", 'String'>
    readonly cover_image: FieldRef<"works", 'String'>
    readonly github_url: FieldRef<"works", 'String'>
    readonly demo_url: FieldRef<"works", 'String'>
    readonly drive_url: FieldRef<"works", 'String'>
    readonly published_at: FieldRef<"works", 'DateTime'>
    readonly status: FieldRef<"works", 'statusWork'>
    readonly order_index: FieldRef<"works", 'Int'>
    readonly created_at: FieldRef<"works", 'DateTime'>
    readonly updated_at: FieldRef<"works", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * works findUnique
   */
  export type worksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelect<ExtArgs> | null
    /**
     * Filter, which works to fetch.
     */
    where: worksWhereUniqueInput
  }

  /**
   * works findUniqueOrThrow
   */
  export type worksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelect<ExtArgs> | null
    /**
     * Filter, which works to fetch.
     */
    where: worksWhereUniqueInput
  }

  /**
   * works findFirst
   */
  export type worksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelect<ExtArgs> | null
    /**
     * Filter, which works to fetch.
     */
    where?: worksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of works to fetch.
     */
    orderBy?: worksOrderByWithRelationInput | worksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for works.
     */
    cursor?: worksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of works.
     */
    distinct?: WorksScalarFieldEnum | WorksScalarFieldEnum[]
  }

  /**
   * works findFirstOrThrow
   */
  export type worksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelect<ExtArgs> | null
    /**
     * Filter, which works to fetch.
     */
    where?: worksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of works to fetch.
     */
    orderBy?: worksOrderByWithRelationInput | worksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for works.
     */
    cursor?: worksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of works.
     */
    distinct?: WorksScalarFieldEnum | WorksScalarFieldEnum[]
  }

  /**
   * works findMany
   */
  export type worksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelect<ExtArgs> | null
    /**
     * Filter, which works to fetch.
     */
    where?: worksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of works to fetch.
     */
    orderBy?: worksOrderByWithRelationInput | worksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing works.
     */
    cursor?: worksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` works.
     */
    skip?: number
    distinct?: WorksScalarFieldEnum | WorksScalarFieldEnum[]
  }

  /**
   * works create
   */
  export type worksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelect<ExtArgs> | null
    /**
     * The data needed to create a works.
     */
    data: XOR<worksCreateInput, worksUncheckedCreateInput>
  }

  /**
   * works createMany
   */
  export type worksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many works.
     */
    data: worksCreateManyInput | worksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * works createManyAndReturn
   */
  export type worksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many works.
     */
    data: worksCreateManyInput | worksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * works update
   */
  export type worksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelect<ExtArgs> | null
    /**
     * The data needed to update a works.
     */
    data: XOR<worksUpdateInput, worksUncheckedUpdateInput>
    /**
     * Choose, which works to update.
     */
    where: worksWhereUniqueInput
  }

  /**
   * works updateMany
   */
  export type worksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update works.
     */
    data: XOR<worksUpdateManyMutationInput, worksUncheckedUpdateManyInput>
    /**
     * Filter which works to update
     */
    where?: worksWhereInput
  }

  /**
   * works upsert
   */
  export type worksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelect<ExtArgs> | null
    /**
     * The filter to search for the works to update in case it exists.
     */
    where: worksWhereUniqueInput
    /**
     * In case the works found by the `where` argument doesn't exist, create a new works with this data.
     */
    create: XOR<worksCreateInput, worksUncheckedCreateInput>
    /**
     * In case the works was found with the provided `where` argument, update it with this data.
     */
    update: XOR<worksUpdateInput, worksUncheckedUpdateInput>
  }

  /**
   * works delete
   */
  export type worksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelect<ExtArgs> | null
    /**
     * Filter which works to delete.
     */
    where: worksWhereUniqueInput
  }

  /**
   * works deleteMany
   */
  export type worksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which works to delete
     */
    where?: worksWhereInput
  }

  /**
   * works without action
   */
  export type worksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the works
     */
    select?: worksSelect<ExtArgs> | null
  }


  /**
   * Model contact_messages
   */

  export type AggregateContact_messages = {
    _count: Contact_messagesCountAggregateOutputType | null
    _avg: Contact_messagesAvgAggregateOutputType | null
    _sum: Contact_messagesSumAggregateOutputType | null
    _min: Contact_messagesMinAggregateOutputType | null
    _max: Contact_messagesMaxAggregateOutputType | null
  }

  export type Contact_messagesAvgAggregateOutputType = {
    id: number | null
  }

  export type Contact_messagesSumAggregateOutputType = {
    id: number | null
  }

  export type Contact_messagesMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    status: $Enums.statusContact | null
    created_at: Date | null
  }

  export type Contact_messagesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    status: $Enums.statusContact | null
    created_at: Date | null
  }

  export type Contact_messagesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    subject: number
    message: number
    status: number
    created_at: number
    _all: number
  }


  export type Contact_messagesAvgAggregateInputType = {
    id?: true
  }

  export type Contact_messagesSumAggregateInputType = {
    id?: true
  }

  export type Contact_messagesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
    created_at?: true
  }

  export type Contact_messagesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
    created_at?: true
  }

  export type Contact_messagesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type Contact_messagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact_messages to aggregate.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contact_messages
    **/
    _count?: true | Contact_messagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Contact_messagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Contact_messagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contact_messagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contact_messagesMaxAggregateInputType
  }

  export type GetContact_messagesAggregateType<T extends Contact_messagesAggregateArgs> = {
        [P in keyof T & keyof AggregateContact_messages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact_messages[P]>
      : GetScalarType<T[P], AggregateContact_messages[P]>
  }




  export type contact_messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contact_messagesWhereInput
    orderBy?: contact_messagesOrderByWithAggregationInput | contact_messagesOrderByWithAggregationInput[]
    by: Contact_messagesScalarFieldEnum[] | Contact_messagesScalarFieldEnum
    having?: contact_messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contact_messagesCountAggregateInputType | true
    _avg?: Contact_messagesAvgAggregateInputType
    _sum?: Contact_messagesSumAggregateInputType
    _min?: Contact_messagesMinAggregateInputType
    _max?: Contact_messagesMaxAggregateInputType
  }

  export type Contact_messagesGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    subject: string
    message: string
    status: $Enums.statusContact
    created_at: Date
    _count: Contact_messagesCountAggregateOutputType | null
    _avg: Contact_messagesAvgAggregateOutputType | null
    _sum: Contact_messagesSumAggregateOutputType | null
    _min: Contact_messagesMinAggregateOutputType | null
    _max: Contact_messagesMaxAggregateOutputType | null
  }

  type GetContact_messagesGroupByPayload<T extends contact_messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Contact_messagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contact_messagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contact_messagesGroupByOutputType[P]>
            : GetScalarType<T[P], Contact_messagesGroupByOutputType[P]>
        }
      >
    >


  export type contact_messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["contact_messages"]>

  export type contact_messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["contact_messages"]>

  export type contact_messagesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    created_at?: boolean
  }


  export type $contact_messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact_messages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      subject: string
      message: string
      status: $Enums.statusContact
      created_at: Date
    }, ExtArgs["result"]["contact_messages"]>
    composites: {}
  }

  type contact_messagesGetPayload<S extends boolean | null | undefined | contact_messagesDefaultArgs> = $Result.GetResult<Prisma.$contact_messagesPayload, S>

  type contact_messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<contact_messagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Contact_messagesCountAggregateInputType | true
    }

  export interface contact_messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact_messages'], meta: { name: 'contact_messages' } }
    /**
     * Find zero or one Contact_messages that matches the filter.
     * @param {contact_messagesFindUniqueArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contact_messagesFindUniqueArgs>(args: SelectSubset<T, contact_messagesFindUniqueArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contact_messages that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {contact_messagesFindUniqueOrThrowArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contact_messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, contact_messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contact_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesFindFirstArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contact_messagesFindFirstArgs>(args?: SelectSubset<T, contact_messagesFindFirstArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contact_messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesFindFirstOrThrowArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contact_messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, contact_messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contact_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contact_messages
     * const contact_messages = await prisma.contact_messages.findMany()
     * 
     * // Get first 10 Contact_messages
     * const contact_messages = await prisma.contact_messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contact_messagesWithIdOnly = await prisma.contact_messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contact_messagesFindManyArgs>(args?: SelectSubset<T, contact_messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contact_messages.
     * @param {contact_messagesCreateArgs} args - Arguments to create a Contact_messages.
     * @example
     * // Create one Contact_messages
     * const Contact_messages = await prisma.contact_messages.create({
     *   data: {
     *     // ... data to create a Contact_messages
     *   }
     * })
     * 
     */
    create<T extends contact_messagesCreateArgs>(args: SelectSubset<T, contact_messagesCreateArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contact_messages.
     * @param {contact_messagesCreateManyArgs} args - Arguments to create many Contact_messages.
     * @example
     * // Create many Contact_messages
     * const contact_messages = await prisma.contact_messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contact_messagesCreateManyArgs>(args?: SelectSubset<T, contact_messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contact_messages and returns the data saved in the database.
     * @param {contact_messagesCreateManyAndReturnArgs} args - Arguments to create many Contact_messages.
     * @example
     * // Create many Contact_messages
     * const contact_messages = await prisma.contact_messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contact_messages and only return the `id`
     * const contact_messagesWithIdOnly = await prisma.contact_messages.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contact_messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, contact_messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Contact_messages.
     * @param {contact_messagesDeleteArgs} args - Arguments to delete one Contact_messages.
     * @example
     * // Delete one Contact_messages
     * const Contact_messages = await prisma.contact_messages.delete({
     *   where: {
     *     // ... filter to delete one Contact_messages
     *   }
     * })
     * 
     */
    delete<T extends contact_messagesDeleteArgs>(args: SelectSubset<T, contact_messagesDeleteArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contact_messages.
     * @param {contact_messagesUpdateArgs} args - Arguments to update one Contact_messages.
     * @example
     * // Update one Contact_messages
     * const contact_messages = await prisma.contact_messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contact_messagesUpdateArgs>(args: SelectSubset<T, contact_messagesUpdateArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contact_messages.
     * @param {contact_messagesDeleteManyArgs} args - Arguments to filter Contact_messages to delete.
     * @example
     * // Delete a few Contact_messages
     * const { count } = await prisma.contact_messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contact_messagesDeleteManyArgs>(args?: SelectSubset<T, contact_messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contact_messages
     * const contact_messages = await prisma.contact_messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contact_messagesUpdateManyArgs>(args: SelectSubset<T, contact_messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact_messages.
     * @param {contact_messagesUpsertArgs} args - Arguments to update or create a Contact_messages.
     * @example
     * // Update or create a Contact_messages
     * const contact_messages = await prisma.contact_messages.upsert({
     *   create: {
     *     // ... data to create a Contact_messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact_messages we want to update
     *   }
     * })
     */
    upsert<T extends contact_messagesUpsertArgs>(args: SelectSubset<T, contact_messagesUpsertArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesCountArgs} args - Arguments to filter Contact_messages to count.
     * @example
     * // Count the number of Contact_messages
     * const count = await prisma.contact_messages.count({
     *   where: {
     *     // ... the filter for the Contact_messages we want to count
     *   }
     * })
    **/
    count<T extends contact_messagesCountArgs>(
      args?: Subset<T, contact_messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contact_messagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contact_messagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Contact_messagesAggregateArgs>(args: Subset<T, Contact_messagesAggregateArgs>): Prisma.PrismaPromise<GetContact_messagesAggregateType<T>>

    /**
     * Group by Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesGroupByArgs} args - Group by arguments.
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
      T extends contact_messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contact_messagesGroupByArgs['orderBy'] }
        : { orderBy?: contact_messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, contact_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContact_messagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contact_messages model
   */
  readonly fields: contact_messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact_messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contact_messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the contact_messages model
   */ 
  interface contact_messagesFieldRefs {
    readonly id: FieldRef<"contact_messages", 'Int'>
    readonly name: FieldRef<"contact_messages", 'String'>
    readonly email: FieldRef<"contact_messages", 'String'>
    readonly phone: FieldRef<"contact_messages", 'String'>
    readonly subject: FieldRef<"contact_messages", 'String'>
    readonly message: FieldRef<"contact_messages", 'String'>
    readonly status: FieldRef<"contact_messages", 'statusContact'>
    readonly created_at: FieldRef<"contact_messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * contact_messages findUnique
   */
  export type contact_messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages findUniqueOrThrow
   */
  export type contact_messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages findFirst
   */
  export type contact_messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contact_messages.
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_messages.
     */
    distinct?: Contact_messagesScalarFieldEnum | Contact_messagesScalarFieldEnum[]
  }

  /**
   * contact_messages findFirstOrThrow
   */
  export type contact_messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contact_messages.
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_messages.
     */
    distinct?: Contact_messagesScalarFieldEnum | Contact_messagesScalarFieldEnum[]
  }

  /**
   * contact_messages findMany
   */
  export type contact_messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contact_messages.
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    distinct?: Contact_messagesScalarFieldEnum | Contact_messagesScalarFieldEnum[]
  }

  /**
   * contact_messages create
   */
  export type contact_messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * The data needed to create a contact_messages.
     */
    data: XOR<contact_messagesCreateInput, contact_messagesUncheckedCreateInput>
  }

  /**
   * contact_messages createMany
   */
  export type contact_messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contact_messages.
     */
    data: contact_messagesCreateManyInput | contact_messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact_messages createManyAndReturn
   */
  export type contact_messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many contact_messages.
     */
    data: contact_messagesCreateManyInput | contact_messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact_messages update
   */
  export type contact_messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * The data needed to update a contact_messages.
     */
    data: XOR<contact_messagesUpdateInput, contact_messagesUncheckedUpdateInput>
    /**
     * Choose, which contact_messages to update.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages updateMany
   */
  export type contact_messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contact_messages.
     */
    data: XOR<contact_messagesUpdateManyMutationInput, contact_messagesUncheckedUpdateManyInput>
    /**
     * Filter which contact_messages to update
     */
    where?: contact_messagesWhereInput
  }

  /**
   * contact_messages upsert
   */
  export type contact_messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * The filter to search for the contact_messages to update in case it exists.
     */
    where: contact_messagesWhereUniqueInput
    /**
     * In case the contact_messages found by the `where` argument doesn't exist, create a new contact_messages with this data.
     */
    create: XOR<contact_messagesCreateInput, contact_messagesUncheckedCreateInput>
    /**
     * In case the contact_messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contact_messagesUpdateInput, contact_messagesUncheckedUpdateInput>
  }

  /**
   * contact_messages delete
   */
  export type contact_messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Filter which contact_messages to delete.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages deleteMany
   */
  export type contact_messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact_messages to delete
     */
    where?: contact_messagesWhereInput
  }

  /**
   * contact_messages without action
   */
  export type contact_messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const JourneysScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    excerpt: 'excerpt',
    cover_image: 'cover_image',
    year: 'year',
    content: 'content',
    order_index: 'order_index',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type JourneysScalarFieldEnum = (typeof JourneysScalarFieldEnum)[keyof typeof JourneysScalarFieldEnum]


  export const WorksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    excerpt: 'excerpt',
    cover_image: 'cover_image',
    github_url: 'github_url',
    demo_url: 'demo_url',
    drive_url: 'drive_url',
    published_at: 'published_at',
    status: 'status',
    order_index: 'order_index',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WorksScalarFieldEnum = (typeof WorksScalarFieldEnum)[keyof typeof WorksScalarFieldEnum]


  export const Contact_messagesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    subject: 'subject',
    message: 'message',
    status: 'status',
    created_at: 'created_at'
  };

  export type Contact_messagesScalarFieldEnum = (typeof Contact_messagesScalarFieldEnum)[keyof typeof Contact_messagesScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'roleUser'
   */
  export type EnumroleUserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'roleUser'>
    


  /**
   * Reference to a field of type 'roleUser[]'
   */
  export type ListEnumroleUserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'roleUser[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'typeJourney'
   */
  export type EnumtypeJourneyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'typeJourney'>
    


  /**
   * Reference to a field of type 'typeJourney[]'
   */
  export type ListEnumtypeJourneyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'typeJourney[]'>
    


  /**
   * Reference to a field of type 'statusWork'
   */
  export type EnumstatusWorkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusWork'>
    


  /**
   * Reference to a field of type 'statusWork[]'
   */
  export type ListEnumstatusWorkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusWork[]'>
    


  /**
   * Reference to a field of type 'statusContact'
   */
  export type EnumstatusContactFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusContact'>
    


  /**
   * Reference to a field of type 'statusContact[]'
   */
  export type ListEnumstatusContactFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusContact[]'>
    


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


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role?: EnumroleUserFilter<"users"> | $Enums.roleUser
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    role?: EnumroleUserFilter<"users"> | $Enums.roleUser
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    role?: EnumroleUserWithAggregatesFilter<"users"> | $Enums.roleUser
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type journeysWhereInput = {
    AND?: journeysWhereInput | journeysWhereInput[]
    OR?: journeysWhereInput[]
    NOT?: journeysWhereInput | journeysWhereInput[]
    id?: IntFilter<"journeys"> | number
    type?: EnumtypeJourneyFilter<"journeys"> | $Enums.typeJourney
    title?: StringFilter<"journeys"> | string
    excerpt?: StringFilter<"journeys"> | string
    cover_image?: StringFilter<"journeys"> | string
    year?: IntFilter<"journeys"> | number
    content?: StringNullableFilter<"journeys"> | string | null
    order_index?: IntFilter<"journeys"> | number
    created_at?: DateTimeFilter<"journeys"> | Date | string
    updated_at?: DateTimeFilter<"journeys"> | Date | string
  }

  export type journeysOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    cover_image?: SortOrder
    year?: SortOrder
    content?: SortOrderInput | SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type journeysWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: journeysWhereInput | journeysWhereInput[]
    OR?: journeysWhereInput[]
    NOT?: journeysWhereInput | journeysWhereInput[]
    type?: EnumtypeJourneyFilter<"journeys"> | $Enums.typeJourney
    title?: StringFilter<"journeys"> | string
    excerpt?: StringFilter<"journeys"> | string
    cover_image?: StringFilter<"journeys"> | string
    year?: IntFilter<"journeys"> | number
    content?: StringNullableFilter<"journeys"> | string | null
    order_index?: IntFilter<"journeys"> | number
    created_at?: DateTimeFilter<"journeys"> | Date | string
    updated_at?: DateTimeFilter<"journeys"> | Date | string
  }, "id">

  export type journeysOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    cover_image?: SortOrder
    year?: SortOrder
    content?: SortOrderInput | SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: journeysCountOrderByAggregateInput
    _avg?: journeysAvgOrderByAggregateInput
    _max?: journeysMaxOrderByAggregateInput
    _min?: journeysMinOrderByAggregateInput
    _sum?: journeysSumOrderByAggregateInput
  }

  export type journeysScalarWhereWithAggregatesInput = {
    AND?: journeysScalarWhereWithAggregatesInput | journeysScalarWhereWithAggregatesInput[]
    OR?: journeysScalarWhereWithAggregatesInput[]
    NOT?: journeysScalarWhereWithAggregatesInput | journeysScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"journeys"> | number
    type?: EnumtypeJourneyWithAggregatesFilter<"journeys"> | $Enums.typeJourney
    title?: StringWithAggregatesFilter<"journeys"> | string
    excerpt?: StringWithAggregatesFilter<"journeys"> | string
    cover_image?: StringWithAggregatesFilter<"journeys"> | string
    year?: IntWithAggregatesFilter<"journeys"> | number
    content?: StringNullableWithAggregatesFilter<"journeys"> | string | null
    order_index?: IntWithAggregatesFilter<"journeys"> | number
    created_at?: DateTimeWithAggregatesFilter<"journeys"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"journeys"> | Date | string
  }

  export type worksWhereInput = {
    AND?: worksWhereInput | worksWhereInput[]
    OR?: worksWhereInput[]
    NOT?: worksWhereInput | worksWhereInput[]
    id?: IntFilter<"works"> | number
    title?: StringFilter<"works"> | string
    excerpt?: StringFilter<"works"> | string
    cover_image?: StringFilter<"works"> | string
    github_url?: StringNullableFilter<"works"> | string | null
    demo_url?: StringNullableFilter<"works"> | string | null
    drive_url?: StringNullableFilter<"works"> | string | null
    published_at?: DateTimeNullableFilter<"works"> | Date | string | null
    status?: EnumstatusWorkFilter<"works"> | $Enums.statusWork
    order_index?: IntFilter<"works"> | number
    created_at?: DateTimeFilter<"works"> | Date | string
    updated_at?: DateTimeFilter<"works"> | Date | string
  }

  export type worksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    cover_image?: SortOrder
    github_url?: SortOrderInput | SortOrder
    demo_url?: SortOrderInput | SortOrder
    drive_url?: SortOrderInput | SortOrder
    published_at?: SortOrderInput | SortOrder
    status?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type worksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: worksWhereInput | worksWhereInput[]
    OR?: worksWhereInput[]
    NOT?: worksWhereInput | worksWhereInput[]
    title?: StringFilter<"works"> | string
    excerpt?: StringFilter<"works"> | string
    cover_image?: StringFilter<"works"> | string
    github_url?: StringNullableFilter<"works"> | string | null
    demo_url?: StringNullableFilter<"works"> | string | null
    drive_url?: StringNullableFilter<"works"> | string | null
    published_at?: DateTimeNullableFilter<"works"> | Date | string | null
    status?: EnumstatusWorkFilter<"works"> | $Enums.statusWork
    order_index?: IntFilter<"works"> | number
    created_at?: DateTimeFilter<"works"> | Date | string
    updated_at?: DateTimeFilter<"works"> | Date | string
  }, "id">

  export type worksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    cover_image?: SortOrder
    github_url?: SortOrderInput | SortOrder
    demo_url?: SortOrderInput | SortOrder
    drive_url?: SortOrderInput | SortOrder
    published_at?: SortOrderInput | SortOrder
    status?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: worksCountOrderByAggregateInput
    _avg?: worksAvgOrderByAggregateInput
    _max?: worksMaxOrderByAggregateInput
    _min?: worksMinOrderByAggregateInput
    _sum?: worksSumOrderByAggregateInput
  }

  export type worksScalarWhereWithAggregatesInput = {
    AND?: worksScalarWhereWithAggregatesInput | worksScalarWhereWithAggregatesInput[]
    OR?: worksScalarWhereWithAggregatesInput[]
    NOT?: worksScalarWhereWithAggregatesInput | worksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"works"> | number
    title?: StringWithAggregatesFilter<"works"> | string
    excerpt?: StringWithAggregatesFilter<"works"> | string
    cover_image?: StringWithAggregatesFilter<"works"> | string
    github_url?: StringNullableWithAggregatesFilter<"works"> | string | null
    demo_url?: StringNullableWithAggregatesFilter<"works"> | string | null
    drive_url?: StringNullableWithAggregatesFilter<"works"> | string | null
    published_at?: DateTimeNullableWithAggregatesFilter<"works"> | Date | string | null
    status?: EnumstatusWorkWithAggregatesFilter<"works"> | $Enums.statusWork
    order_index?: IntWithAggregatesFilter<"works"> | number
    created_at?: DateTimeWithAggregatesFilter<"works"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"works"> | Date | string
  }

  export type contact_messagesWhereInput = {
    AND?: contact_messagesWhereInput | contact_messagesWhereInput[]
    OR?: contact_messagesWhereInput[]
    NOT?: contact_messagesWhereInput | contact_messagesWhereInput[]
    id?: IntFilter<"contact_messages"> | number
    name?: StringFilter<"contact_messages"> | string
    email?: StringFilter<"contact_messages"> | string
    phone?: StringNullableFilter<"contact_messages"> | string | null
    subject?: StringFilter<"contact_messages"> | string
    message?: StringFilter<"contact_messages"> | string
    status?: EnumstatusContactFilter<"contact_messages"> | $Enums.statusContact
    created_at?: DateTimeFilter<"contact_messages"> | Date | string
  }

  export type contact_messagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type contact_messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contact_messagesWhereInput | contact_messagesWhereInput[]
    OR?: contact_messagesWhereInput[]
    NOT?: contact_messagesWhereInput | contact_messagesWhereInput[]
    name?: StringFilter<"contact_messages"> | string
    email?: StringFilter<"contact_messages"> | string
    phone?: StringNullableFilter<"contact_messages"> | string | null
    subject?: StringFilter<"contact_messages"> | string
    message?: StringFilter<"contact_messages"> | string
    status?: EnumstatusContactFilter<"contact_messages"> | $Enums.statusContact
    created_at?: DateTimeFilter<"contact_messages"> | Date | string
  }, "id">

  export type contact_messagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: contact_messagesCountOrderByAggregateInput
    _avg?: contact_messagesAvgOrderByAggregateInput
    _max?: contact_messagesMaxOrderByAggregateInput
    _min?: contact_messagesMinOrderByAggregateInput
    _sum?: contact_messagesSumOrderByAggregateInput
  }

  export type contact_messagesScalarWhereWithAggregatesInput = {
    AND?: contact_messagesScalarWhereWithAggregatesInput | contact_messagesScalarWhereWithAggregatesInput[]
    OR?: contact_messagesScalarWhereWithAggregatesInput[]
    NOT?: contact_messagesScalarWhereWithAggregatesInput | contact_messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contact_messages"> | number
    name?: StringWithAggregatesFilter<"contact_messages"> | string
    email?: StringWithAggregatesFilter<"contact_messages"> | string
    phone?: StringNullableWithAggregatesFilter<"contact_messages"> | string | null
    subject?: StringWithAggregatesFilter<"contact_messages"> | string
    message?: StringWithAggregatesFilter<"contact_messages"> | string
    status?: EnumstatusContactWithAggregatesFilter<"contact_messages"> | $Enums.statusContact
    created_at?: DateTimeWithAggregatesFilter<"contact_messages"> | Date | string
  }

  export type usersCreateInput = {
    email: string
    password_hash: string
    role?: $Enums.roleUser
    created_at: Date | string
    updated_at: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    role?: $Enums.roleUser
    created_at: Date | string
    updated_at: Date | string
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    role?: $Enums.roleUser
    created_at: Date | string
    updated_at: Date | string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type journeysCreateInput = {
    type: $Enums.typeJourney
    title: string
    excerpt: string
    cover_image: string
    year: number
    content?: string | null
    order_index: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type journeysUncheckedCreateInput = {
    id?: number
    type: $Enums.typeJourney
    title: string
    excerpt: string
    cover_image: string
    year: number
    content?: string | null
    order_index: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type journeysUpdateInput = {
    type?: EnumtypeJourneyFieldUpdateOperationsInput | $Enums.typeJourney
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type journeysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumtypeJourneyFieldUpdateOperationsInput | $Enums.typeJourney
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type journeysCreateManyInput = {
    id?: number
    type: $Enums.typeJourney
    title: string
    excerpt: string
    cover_image: string
    year: number
    content?: string | null
    order_index: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type journeysUpdateManyMutationInput = {
    type?: EnumtypeJourneyFieldUpdateOperationsInput | $Enums.typeJourney
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type journeysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumtypeJourneyFieldUpdateOperationsInput | $Enums.typeJourney
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type worksCreateInput = {
    title: string
    excerpt: string
    cover_image: string
    github_url?: string | null
    demo_url?: string | null
    drive_url?: string | null
    published_at?: Date | string | null
    status: $Enums.statusWork
    order_index: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type worksUncheckedCreateInput = {
    id?: number
    title: string
    excerpt: string
    cover_image: string
    github_url?: string | null
    demo_url?: string | null
    drive_url?: string | null
    published_at?: Date | string | null
    status: $Enums.statusWork
    order_index: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type worksUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    drive_url?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusWorkFieldUpdateOperationsInput | $Enums.statusWork
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type worksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    drive_url?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusWorkFieldUpdateOperationsInput | $Enums.statusWork
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type worksCreateManyInput = {
    id?: number
    title: string
    excerpt: string
    cover_image: string
    github_url?: string | null
    demo_url?: string | null
    drive_url?: string | null
    published_at?: Date | string | null
    status: $Enums.statusWork
    order_index: number
    created_at: Date | string
    updated_at: Date | string
  }

  export type worksUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    drive_url?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusWorkFieldUpdateOperationsInput | $Enums.statusWork
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type worksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    cover_image?: StringFieldUpdateOperationsInput | string
    github_url?: NullableStringFieldUpdateOperationsInput | string | null
    demo_url?: NullableStringFieldUpdateOperationsInput | string | null
    drive_url?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusWorkFieldUpdateOperationsInput | $Enums.statusWork
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesCreateInput = {
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    status: $Enums.statusContact
    created_at: Date | string
  }

  export type contact_messagesUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    status: $Enums.statusContact
    created_at: Date | string
  }

  export type contact_messagesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusContactFieldUpdateOperationsInput | $Enums.statusContact
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusContactFieldUpdateOperationsInput | $Enums.statusContact
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    status: $Enums.statusContact
    created_at: Date | string
  }

  export type contact_messagesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusContactFieldUpdateOperationsInput | $Enums.statusContact
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusContactFieldUpdateOperationsInput | $Enums.statusContact
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumroleUserFilter<$PrismaModel = never> = {
    equals?: $Enums.roleUser | EnumroleUserFieldRefInput<$PrismaModel>
    in?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumroleUserFilter<$PrismaModel> | $Enums.roleUser
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
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

  export type EnumroleUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.roleUser | EnumroleUserFieldRefInput<$PrismaModel>
    in?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumroleUserWithAggregatesFilter<$PrismaModel> | $Enums.roleUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleUserFilter<$PrismaModel>
    _max?: NestedEnumroleUserFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumtypeJourneyFilter<$PrismaModel = never> = {
    equals?: $Enums.typeJourney | EnumtypeJourneyFieldRefInput<$PrismaModel>
    in?: $Enums.typeJourney[] | ListEnumtypeJourneyFieldRefInput<$PrismaModel>
    notIn?: $Enums.typeJourney[] | ListEnumtypeJourneyFieldRefInput<$PrismaModel>
    not?: NestedEnumtypeJourneyFilter<$PrismaModel> | $Enums.typeJourney
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type journeysCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    cover_image?: SortOrder
    year?: SortOrder
    content?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type journeysAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    order_index?: SortOrder
  }

  export type journeysMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    cover_image?: SortOrder
    year?: SortOrder
    content?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type journeysMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    cover_image?: SortOrder
    year?: SortOrder
    content?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type journeysSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    order_index?: SortOrder
  }

  export type EnumtypeJourneyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.typeJourney | EnumtypeJourneyFieldRefInput<$PrismaModel>
    in?: $Enums.typeJourney[] | ListEnumtypeJourneyFieldRefInput<$PrismaModel>
    notIn?: $Enums.typeJourney[] | ListEnumtypeJourneyFieldRefInput<$PrismaModel>
    not?: NestedEnumtypeJourneyWithAggregatesFilter<$PrismaModel> | $Enums.typeJourney
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtypeJourneyFilter<$PrismaModel>
    _max?: NestedEnumtypeJourneyFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumstatusWorkFilter<$PrismaModel = never> = {
    equals?: $Enums.statusWork | EnumstatusWorkFieldRefInput<$PrismaModel>
    in?: $Enums.statusWork[] | ListEnumstatusWorkFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusWork[] | ListEnumstatusWorkFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWorkFilter<$PrismaModel> | $Enums.statusWork
  }

  export type worksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    cover_image?: SortOrder
    github_url?: SortOrder
    demo_url?: SortOrder
    drive_url?: SortOrder
    published_at?: SortOrder
    status?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type worksAvgOrderByAggregateInput = {
    id?: SortOrder
    order_index?: SortOrder
  }

  export type worksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    cover_image?: SortOrder
    github_url?: SortOrder
    demo_url?: SortOrder
    drive_url?: SortOrder
    published_at?: SortOrder
    status?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type worksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    cover_image?: SortOrder
    github_url?: SortOrder
    demo_url?: SortOrder
    drive_url?: SortOrder
    published_at?: SortOrder
    status?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type worksSumOrderByAggregateInput = {
    id?: SortOrder
    order_index?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumstatusWorkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusWork | EnumstatusWorkFieldRefInput<$PrismaModel>
    in?: $Enums.statusWork[] | ListEnumstatusWorkFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusWork[] | ListEnumstatusWorkFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWorkWithAggregatesFilter<$PrismaModel> | $Enums.statusWork
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusWorkFilter<$PrismaModel>
    _max?: NestedEnumstatusWorkFilter<$PrismaModel>
  }

  export type EnumstatusContactFilter<$PrismaModel = never> = {
    equals?: $Enums.statusContact | EnumstatusContactFieldRefInput<$PrismaModel>
    in?: $Enums.statusContact[] | ListEnumstatusContactFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusContact[] | ListEnumstatusContactFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusContactFilter<$PrismaModel> | $Enums.statusContact
  }

  export type contact_messagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type contact_messagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contact_messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type contact_messagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type contact_messagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumstatusContactWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusContact | EnumstatusContactFieldRefInput<$PrismaModel>
    in?: $Enums.statusContact[] | ListEnumstatusContactFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusContact[] | ListEnumstatusContactFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusContactWithAggregatesFilter<$PrismaModel> | $Enums.statusContact
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusContactFilter<$PrismaModel>
    _max?: NestedEnumstatusContactFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumroleUserFieldUpdateOperationsInput = {
    set?: $Enums.roleUser
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumtypeJourneyFieldUpdateOperationsInput = {
    set?: $Enums.typeJourney
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumstatusWorkFieldUpdateOperationsInput = {
    set?: $Enums.statusWork
  }

  export type EnumstatusContactFieldUpdateOperationsInput = {
    set?: $Enums.statusContact
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

  export type NestedEnumroleUserFilter<$PrismaModel = never> = {
    equals?: $Enums.roleUser | EnumroleUserFieldRefInput<$PrismaModel>
    in?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumroleUserFilter<$PrismaModel> | $Enums.roleUser
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumroleUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.roleUser | EnumroleUserFieldRefInput<$PrismaModel>
    in?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumroleUserWithAggregatesFilter<$PrismaModel> | $Enums.roleUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleUserFilter<$PrismaModel>
    _max?: NestedEnumroleUserFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumtypeJourneyFilter<$PrismaModel = never> = {
    equals?: $Enums.typeJourney | EnumtypeJourneyFieldRefInput<$PrismaModel>
    in?: $Enums.typeJourney[] | ListEnumtypeJourneyFieldRefInput<$PrismaModel>
    notIn?: $Enums.typeJourney[] | ListEnumtypeJourneyFieldRefInput<$PrismaModel>
    not?: NestedEnumtypeJourneyFilter<$PrismaModel> | $Enums.typeJourney
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumtypeJourneyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.typeJourney | EnumtypeJourneyFieldRefInput<$PrismaModel>
    in?: $Enums.typeJourney[] | ListEnumtypeJourneyFieldRefInput<$PrismaModel>
    notIn?: $Enums.typeJourney[] | ListEnumtypeJourneyFieldRefInput<$PrismaModel>
    not?: NestedEnumtypeJourneyWithAggregatesFilter<$PrismaModel> | $Enums.typeJourney
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtypeJourneyFilter<$PrismaModel>
    _max?: NestedEnumtypeJourneyFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumstatusWorkFilter<$PrismaModel = never> = {
    equals?: $Enums.statusWork | EnumstatusWorkFieldRefInput<$PrismaModel>
    in?: $Enums.statusWork[] | ListEnumstatusWorkFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusWork[] | ListEnumstatusWorkFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWorkFilter<$PrismaModel> | $Enums.statusWork
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatusWorkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusWork | EnumstatusWorkFieldRefInput<$PrismaModel>
    in?: $Enums.statusWork[] | ListEnumstatusWorkFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusWork[] | ListEnumstatusWorkFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWorkWithAggregatesFilter<$PrismaModel> | $Enums.statusWork
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusWorkFilter<$PrismaModel>
    _max?: NestedEnumstatusWorkFilter<$PrismaModel>
  }

  export type NestedEnumstatusContactFilter<$PrismaModel = never> = {
    equals?: $Enums.statusContact | EnumstatusContactFieldRefInput<$PrismaModel>
    in?: $Enums.statusContact[] | ListEnumstatusContactFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusContact[] | ListEnumstatusContactFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusContactFilter<$PrismaModel> | $Enums.statusContact
  }

  export type NestedEnumstatusContactWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusContact | EnumstatusContactFieldRefInput<$PrismaModel>
    in?: $Enums.statusContact[] | ListEnumstatusContactFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusContact[] | ListEnumstatusContactFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusContactWithAggregatesFilter<$PrismaModel> | $Enums.statusContact
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusContactFilter<$PrismaModel>
    _max?: NestedEnumstatusContactFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use journeysDefaultArgs instead
     */
    export type journeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = journeysDefaultArgs<ExtArgs>
    /**
     * @deprecated Use worksDefaultArgs instead
     */
    export type worksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = worksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use contact_messagesDefaultArgs instead
     */
    export type contact_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = contact_messagesDefaultArgs<ExtArgs>

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