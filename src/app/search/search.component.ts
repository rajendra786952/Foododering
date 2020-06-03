import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price:  275,
    raj:true,
    value:1,
    // tslint:disable-next-line:max-line-length
    description: 'A unique combination of Indian Uthappam (pancake) and Italian  pizza, topped with Cerignola olives, ripe vine cherry tomatoes.'
  },
{
  id: '1',
  name: 'Zucchipakoda',
  image: '/assets/images/zucchipakoda.png',
  category: 'appetizer',
  featured: false,
  label: '',
  price: 280,
  raj:true,
  value:1,
  description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
},
{
  id: '2',
  name: 'Vadonut',
  image: '/assets/images/vadonut.png',
  category: 'appetizer',
  featured: false,
  label: 'New',
  price: 190,
  raj:true,
  value:1,
  description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
},
{
  id: '3',
  name: 'ElaiCheese Cake',
  image: '/assets/images/elaicheesecake.png',
  category: 'dessert',
  featured: false,
  label: '',
  price: 300,
  raj:true,
  value:1,
  description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
},
{
  id: '4',
  name: 'Masala Dosa',
  image: '/assets/images/masaladosa.webp',
  category: 'dessert',
  featured: false,
  label: '',
  price: 150,
  raj:true,
  value:1,
  description: ' Masala dosa are rice and lentil crepes stuffed with potato masala. Crispy masala dosa is one of the popular breakfasts from south Indian cuisine'
},
{
  id: '5',
  name: 'MutterKulcha',
  image: '/assets/images/MutterKulcha.webp',
  category: 'dessert',
  featured: false,
  label: '',
  price: 80,
  raj:true,
  value:1,
  description: 'matar kulcha is one of the popular street food of north india'
},
{
  id: '6',
  name: 'Plain Dhokla',
  image: '/assets/images/PlainDhokla.webp',
  category: 'dessert',
  featured: false,
  label: '',
  price: 50,
  raj:true,
  value:1,
  description: 'Plain Dhokla is a delicious Indian recipe served as a Snacks. Find the complete instructions on Bawarchi.'
},
{
  id: '7',
  name: 'dli Sambhar',
  image: '/assets/images/dliSambhar.webp',
  category: 'dessert',
  featured: false,
  label: '',
  price: 80,
  raj:true,
  value:1,
  description: 'Dli Sambhar And Chutney Combo, Dli Value Pack With Chutney, Malabari Paratha and Masala Dosa With Chutney .'
},
{
  id: '8',
  name: 'Channa Bhattura',
  image: '/assets/images/ChannaBhattura.webp',
  category: 'dessert',
  featured: false,
  label: '',
  price: 100,
  raj:true,
  value:1,
  description: 'Chole bhature is a food dish originating from northern India. It is a combination of chana masala and bhatura, a fried bread made from maida.'
},
{
  id: '9',
  name: 'Sambhar Vada',
  image: '/assets/images/SambharVada.webp',
  category: 'dessert',
  featured: false,
  label: '',
  price: 150,
  raj:true,
  value:1,
  description: 'Medu Vada or Sambar Vada is a fried, doughnut shaped south Indian delicacy made from Urad Dal.'
},
{
  id: '10',
  name: 'Cake Vanilla Walnut',
  image: '/assets/images/CakeVanillaWalnut.webp',
  category: 'dessert',
  featured: false,
  label: '',
  price: 80,
  raj:true,
  value:1,
  description: 'Walnut Cake is a delicious easy recipe. the cake is so soft and fluffy! Recipe also for a lovely vanilla frosting.'
},
{
  id: '11',
  name: 'Moong Dal Burfi',
  image: '/assets/images/MoongDalBurfi.webp',
  category: 'dessert',
  featured: false,
  label: '',
  price: 110,
  raj:true,
  value:1,
  description: 'moong dal halwa is an Indian dessert recipe which is very famous North-Indian recipe and is made with yellow moong dal.'
}
];
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  dishes: Dish[] =DISHES;
  value:string='';
  value1:string='';
  raj:Boolean=true;
  image:string;
  description:string;
  price:Number;
  constructor() { }

  ngOnInit() {
  }
  search():void{

    this.raj=false;
    for(let i=0;i<=11;i++)
    {
      if(this.dishes[i].name.toLowerCase()==this.value.toLowerCase())
      { this.value1=this.value;
        this.image=this.dishes[i].image;
        this.description=this.dishes[i].description;
        this.price=this.dishes[i].price;
        break;
      }
    }
     
 }
 change():void{
   if(this.value=='')
   {
    this.raj=true;
   }
   
 }

}
