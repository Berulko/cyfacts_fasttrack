# cyfacts_fasttrack

Свод практики фаст-трека гражданства Кипра по чату @cyfasttrack: https://berulko.github.io/cyfacts_fasttrack/

- `docs/topics/*.md`, `docs/_generated/*` и блок `nav`/`extra` в `mkdocs.yml` генерируются командой `tg.py publish`
  приватного конвейера; правки в них перезаписываются следующим прогоном.
- Руками правятся: `docs/index.md`, `docs/stylesheets/`, `docs/javascripts/`, `overrides/`, остальной `mkdocs.yml`.
- Сборка: `.venv/bin/mkdocs build --strict`; предпросмотр: `.venv/bin/mkdocs serve`.
- Нашли ошибку — https://github.com/Berulko/cyfacts_fasttrack/issues/new?template=error.yml

Код — MIT, содержимое `docs/` — CC BY-SA 4.0.
