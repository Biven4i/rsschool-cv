# Bogdan Bivenis

### Contacts:
- **Discord:** biven4i#2506
- **Telegram:** @Biven4i_Bo
- **Phone:** +375292570732
- **Email:** biven4i.en@gmail.com

### About myself:
I am currently working in a factory after college. I want to get development experience and I always like to learn something new for extending my knowledges. It’s easy for me to contact with new people. Also I can say that I’m easily trained.My main goal is to gain new knowledge and skills in order to change job :).

### My skills:
- **HTML&CSS**
- **JavaScript**
- **Shell**
- **Figma**

### Code example:

**RGB To Hex Conversion:**

``` JavaScript
function rgb(...args) {
  return args.map(item => {
    if(item.toString("16").length < 2) {
      return 0 + item.toString("16").toUpperCase();
    }
    if(item > 255) {
      return "FF";
    }
    if(item <= 0) {
      return "00";
    }

    return item.toString("16").toUpperCase();
  }).join("");
}
```