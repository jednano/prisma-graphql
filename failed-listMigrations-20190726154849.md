# Failed listMigrations at 2019-07-26T20:48:49.206Z
## RPC Input One Line
```json
{"id":1,"jsonrpc":"2.0","method":"listMigrations","params":{"projectInfo":"","sourceConfig":"datasource db {\n   provider = \"mysql\"\n   url      = \"mysql://root:root@localhost:3306/prisma-graphql\"\n}\n\ngenerator photonjs {\n   provider = \"photonjs\"\n}\n\nmodel User {\n   id    String  @id @default(cuid())\n   name  String?\n   email String  @unique\n}\n"}}
```

## RPC Input Readable
```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "listMigrations",
  "params": {
    "projectInfo": "",
    "sourceConfig": "datasource db {\n   provider = \"mysql\"\n   url      = \"mysql://root:root@localhost:3306/prisma-graphql\"\n}\n\ngenerator photonjs {\n   provider = \"photonjs\"\n}\n\nmodel User {\n   id    String  @id @default(cuid())\n   name  String?\n   email String  @unique\n}\n"
  }
}
```


## RPC Response
```
null
```

## Stack Trace
```bash
[migration-engine/connectors/sql-migration-connector/src/lib.rs:394] format!("CREATE SCHEMA IF NOT EXISTS `{}` DEFAULT CHARACTER SET latin1;" , &
        self . schema_name) = "CREATE SCHEMA IF NOT EXISTS `prisma-graphql` DEFAULT CHARACTER SET latin1;"
[migration-engine/connectors/sql-migration-connector/src/sql_migration_persistence.rs:39] m.make_from(barrel_variant) = "CREATE TABLE prisma-graphql._Migration (revision INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, name TEXT NOT NULL, datamodel TEXT NOT NULL, status TEXT NOT NULL, applied INTEGER NOT NULL, rolled_back INTEGER NOT NULL, datamodel_steps TEXT NOT NULL, database_migration TEXT NOT NULL, errors TEXT NOT NULL, started_at datetime(3) NOT NULL, finished_at datetime(3));"
[/var/root/.cargo/git/checkouts/prisma-query-a8c45647247f5d6d/0773bc9/src/connector/mysql.rs:60] visitor::Mysql::build(q) = (
    "SELECT `prisma-graphql`.`_Migration`.* FROM `prisma-graphql`.`_Migration`",
    [],
)
thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value: QueryError(MySqlError { ERROR 1146 (42S02): Table 'prisma-graphql._migration' doesn't exist }

stack backtrace:
   0: backtrace::backtrace::trace::h3f870261b94b6024 (0x1055608ae)
   1: backtrace::capture::Backtrace::new_unresolved::h25925a0b13473190 (0x10555ead8)
   2: failure::backtrace::internal::InternalBacktrace::new::h230bec79f89e912f (0x10555e479)
   3: <failure::backtrace::Backtrace as core::default::Default>::default::h8b0b2cf82031e99b (0x10555e665)
   4: prisma_query::connector::mysql::error::<impl core::convert::From<mysql::error::Error> for prisma_query::error::Error>::from::hddaab37d65e56fe2 (0x105099fa9)
   5: <prisma_query::connector::mysql::Mysql as prisma_query::connector::queryable::Queryable>::query_raw::h4048787a6e2b1e89 (0x105047f43)
   6: <prisma_query::connector::mysql::Mysql as prisma_query::connector::queryable::Queryable>::query::he77825520ab7f867 (0x105047de7)
   7: <sql_migration_connector::migration_database::Mysql as sql_migration_connector::migration_database::MigrationDatabase>::query::hbe0d95c7517bd3f0 (0x104ff16ed)
   8: <sql_migration_connector::sql_migration_persistence::SqlMigrationPersistence as migration_connector::migration_persistence::MigrationPersistence>::load_all::hacd9d914d0948989 (0x104fafefb)
   9: <migration_core::commands::list_migrations::ListMigrationStepsCommand as migration_core::commands::command::MigrationCommand>::execute::h7edfc11b204980e2 (0x104ee845d)
  10: <F as jsonrpc_core::calls::RpcMethodSimple>::call::hbbb6581413736909 (0x104f2da61)
  11: <F as jsonrpc_core::calls::RpcMethod<T>>::call::h7c17e577651ddebc (0x104ed845c)
  12: <futures::future::lazy::Lazy<F,R> as futures::future::Future>::poll::h7f62c49ec5ec49d8 (0x104eead52)
  13: <futures::future::then::Then<A,B,F> as futures::future::Future>::poll::hd3640b9f8a7227c7 (0x104ed8b60)
  14: <futures::future::map::Map<A,F> as futures::future::Future>::poll::h2667a2b68a4fbb30 (0x104ef440f)
  15: <futures::future::either::Either<A,B> as futures::future::Future>::poll::h42c5e0c37fc7d158 (0x104eeb060)
  16: futures::task_impl::std::set::hde5c32938b5d7f60 (0x104f22fff)
  17: std::thread::local::LocalKey<T>::with::hf3b224f371b4bd79 (0x104f26c06)
  18: futures::future::Future::wait::h3a7e1453a40280d2 (0x104ef425f)
  19: jsonrpc_core::io::IoHandler<M>::handle_request_sync::h75f47a55ab6f51f4 (0x104ed2e7f)
  20: migration_core::rpc_api::RpcApi::handle::h75aceabf15a799ed (0x104f3317b)
  21: migration_engine::main::h4d335f212ee535bf (0x104eaf3fd)
  22: std::rt::lang_start::{{closure}}::h404c753d21bbe6e3 (0x104eaf466)
  23: std::panicking::try::do_call::h1252fc9a2ff235eb (0x105584db8)
  24: __rust_maybe_catch_panic (0x10558919f)
  25: std::rt::lang_start_internal::h4c054360e442146c (0x10558589e)
  26: main (0x104eaf459))', src/libcore/result.rs:997:5
stack backtrace:
   0: std::sys::unix::backtrace::tracing::imp::unwind_backtrace
   1: std::sys_common::backtrace::_print
   2: std::panicking::default_hook::{{closure}}
   3: std::panicking::default_hook
   4: std::panicking::rust_panic_with_hook
   5: std::panicking::continue_panic_fmt
   6: rust_begin_unwind
   7: core::panicking::panic_fmt
   8: core::result::unwrap_failed
   9: <sql_migration_connector::sql_migration_persistence::SqlMigrationPersistence as migration_connector::migration_persistence::MigrationPersistence>::load_all
  10: <migration_core::commands::list_migrations::ListMigrationStepsCommand as migration_core::commands::command::MigrationCommand>::execute
  11: <F as jsonrpc_core::calls::RpcMethodSimple>::call
  12: <F as jsonrpc_core::calls::RpcMethod<T>>::call
  13: <futures::future::lazy::Lazy<F,R> as futures::future::Future>::poll
  14: <futures::future::then::Then<A,B,F> as futures::future::Future>::poll
  15: <futures::future::map::Map<A,F> as futures::future::Future>::poll
  16: <futures::future::either::Either<A,B> as futures::future::Future>::poll
  17: futures::task_impl::std::set
  18: std::thread::local::LocalKey<T>::with
  19: futures::future::Future::wait
  20: jsonrpc_core::io::IoHandler<M>::handle_request_sync
  21: migration_core::rpc_api::RpcApi::handle
  22: migration_engine::main
  23: std::rt::lang_start::{{closure}}
  24: std::panicking::try::do_call
  25: __rust_maybe_catch_panic
  26: std::rt::lang_start_internal
  27: main

```
