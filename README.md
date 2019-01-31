# layzily

## Usage

```jsx
<Layzily
  src="https://high-res-image.jpg"
  alt="I'm lazy"
  actual={({ imageProps }) => <img alt={imageProps.alt} {...imageProps} />}
  fallback={({ imageProps, ref }) => <img ref={ref} alt={imageProps.alt} src="https://low-res-image.jpg" />}
/>
```
