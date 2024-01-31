// foodMixin.js
export default {
    data() {
      return {
        services: [
          {
            name: 'Zomato',
            logo: require('@/assets/zomato-logo.png'),
            description: 'Discover and order from restaurants near you.',
            link: 'https://www.zomato.com/',
          },
          {
            name: 'Swiggy',
            logo: require('@/assets/swiggy-logo.png'),
            description: 'Order food online from your favorite restaurants.',
            link: 'https://www.swiggy.com/',
          },
          {
            name: 'EatSure',
            logo: require('@/assets/eatsure.jpg'),
            description: 'Multiple restaurants. Mega Offers. One Delivery!',
            link: 'https://www.eatsure.com/mandarin-oak',
          },
        ],
        recipes: [
            {
              name: 'Lemon-Garlic Pasta with Salmon',
              image: require('@/assets/pasta.jpg'),
              link: 'https://www.eatingwell.com/recipe/276373/lemon-garlic-pasta-with-salmon/',
            },
            {
              name: 'Chole (Chickpea Curry)',
              image: require('@/assets/chole.webp'),
              link: 'https://www.eatingwell.com/recipe/255186/chickpea-curry-chhole/',
            },
            {
              name: 'SMOKY MOUNTAIN CHEESY CRAWFISH',
              image: require('@/assets/crawfish.png'),
              link: 'https://www.gordonramsay.com/gr/recipes/crawfishomelette/',
            },
            {
              name: 'Schezwan Paneer',
              image: require('@/assets/paneer.jpg'),
              link: 'https://harpalssokhi.com/recipe/schezwan-paneer/',
            },
            {
              name: 'Shahi Gosht',
              image: require('@/assets/Patiala-Shahi-Gosht.png'),
              link: 'https://harpalssokhi.com/recipe/patiala-shahi-gosht-%e0%a4%aa%e0%a4%9f%e0%a4%bf%e0%a4%86%e0%a4%b2%e0%a4%be-%e0%a4%b6%e0%a4%be%e0%a4%b9%e0%a5%80-%e0%a4%97%e0%a5%8b%e0%a4%b6%e0%a5%8d%e0%a4%a4/',
            },
          ],
      };
    },
  };
  