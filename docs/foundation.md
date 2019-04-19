Foundation is where everything begins. 

It starts with a set of principles to guide and shape our work. 

It then includes a set of core design tokens (colours, type styles, etc) as a library. These tokens are then applied in the Form section to apply brand preferences.

Foundation → Form
`$pink-500: #D1478E;` → `$color-accent: $pink-500;`

So the colour ramps would belong in Foundation, whereas accent colours belong to Form. In CSS structure, this becomes the overriddable stuff, which theoretically makes for a more robustly flexible system. 
