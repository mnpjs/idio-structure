## Dokku Deploy

To [deploy on a Dokku](##) host, an app needs to be created first, and the `DOKKU_LETSENCRYPT_EMAIL` should be set. Locally, the following command will add a remote git repo that can be used for deploy:

```sh
git add remove dokku dokku@artd.eco:my-new-package
```

On the host, the app need to be prepared first.

```sh
dokku apps:create my-new-package
dokku config:set --no-restart my-new-package DOKKU_LETSENCRYPT_EMAIL=ssh@adc.sh
# deploy from git
dokku letsencrypt my-new-package
```

%~%