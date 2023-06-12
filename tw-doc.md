# Les bases de Tailwind

1. `npx tailwindcss init`
2. aller dans tailwind.config.js
3. configurer l'input comme ceci par exemple

```
content: ["./build/*.html"],
```

5. creer les fichier et dossiers necessaires dans ce cas build et src
6. ecrire ceci dans input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. executer cette commande ensuite

```
npx tailwindcss -i ./src/input.css -o ./build/css/style.css
```

et puis

```
npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch
```
