# Imágenes de Ejemplo para el Hub de Campaña Cinematográfica

Este directorio contiene imágenes de ejemplo para el proyecto. En un proyecto real, reemplaza estas imágenes con contenido real de tu campaña cinematográfica.

## Estructura de Imágenes Recomendada

```
public/images/
├── hero-bg.jpg              # Imagen de fondo para el hero
├── og-default.jpg           # Imagen por defecto para OpenGraph
├── trailer-cover.jpg        # Portada del tráiler
├── trailer-og.jpg           # Imagen OG del tráiler
├── making-of-cover.jpg      # Portada del making-of
├── making-of-og.jpg         # Imagen OG del making-of
├── poster-cover.jpg         # Portada del poster
├── poster-og.jpg            # Imagen OG del poster
└── placeholder-*.jpg       # Imágenes placeholder
```

## Especificaciones Técnicas

### Hero Background
- **Resolución**: 1920x1080px mínimo
- **Formato**: JPG optimizado
- **Peso**: < 500KB
- **Aspecto**: 16:9

### OpenGraph Images
- **Resolución**: 1200x630px
- **Formato**: JPG optimizado
- **Peso**: < 300KB
- **Aspecto**: 1.91:1

### Cover Images
- **Resolución**: 800x450px mínimo
- **Formato**: JPG optimizado
- **Peso**: < 200KB
- **Aspecto**: 16:9

## Herramientas Recomendadas

- **Compresión**: [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
- **Redimensionamiento**: [Canva](https://canva.com/) o [Figma](https://figma.com/)
- **Optimización**: [ImageOptim](https://imageoptim.com/) (Mac) o [RIOT](http://luci.criosweb.ro/riot/) (Windows)

## Notas Importantes

1. **Derechos de Autor**: Asegúrate de tener los derechos para usar todas las imágenes
2. **Optimización**: Siempre optimiza las imágenes para web
3. **Alt Text**: Proporciona texto alternativo descriptivo para accesibilidad
4. **Responsive**: Considera diferentes tamaños de pantalla
5. **Formatos**: Usa WebP cuando sea posible para mejor rendimiento

## Placeholder Images

Para desarrollo y testing, puedes usar servicios como:
- [Picsum Photos](https://picsum.photos/)
- [Unsplash Source](https://source.unsplash.com/)
- [Placeholder.com](https://placeholder.com/)

Ejemplo de uso:
```html
<img src="https://picsum.photos/800/450" alt="Imagen placeholder" />
```
