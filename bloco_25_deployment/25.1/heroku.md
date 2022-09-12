# Guia para inicialização de Projeto Heroku

- Criando o projeto

```bash
    heroku create

    #  or
    heroku create <project-name>

    # or
    heroku create <project-name> --remote <remote-name>

    #  or
    heroku create <project-name> --buildpack heroku/nodejs
```

- Vincular app existente a um novo remote heroku

```bash
    heroku git:remote -a <project-name> --remote <remote-name>
```

- Deploy do projeto

```bash
    git push heroku master
```

- Verificar logs

```bash
    heroku logs --tail
```

- Verificar variáveis de ambiente

```bash
    heroku config
```

- Adicionar variáveis de ambiente

```bash
    heroku config:set <key>=<value>
```

- Remover variáveis de ambiente

```bash
    heroku config:unset <key>
```

- Remover app

```bash
    heroku apps:destroy --app <project-name> --confirm <project-name>
```

- Adicionar buildpack

```bash
    heroku buildpacks:add heroku/nodejs
```

- Remover buildpack

```bash
    heroku buildpacks:remove heroku/nodejs
```

- Verificar buildpacks

```bash
    heroku buildpacks
```

- Verificar dynos

```bash
    heroku ps
```
