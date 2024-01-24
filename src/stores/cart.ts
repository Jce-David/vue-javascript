
import { defineStore } from 'pinia'
import type { CartDetail, Product} from '@/model/types'
import { useLocalStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', {
  state: () => ({
    detailsCart: useLocalStorage<CartDetail[]>('cartDetails', []),

  }),
  getters: {
    cartItemsCount: (state) => {
      let count = 0 ; 
      state.detailsCart.forEach(
        detail => count += detail.quantity
      );
      return count
    },
    totalPrice: (state)=> {
      let total = 0;
      state.detailsCart.forEach(d=> { total += d.quantity * d.product.price } );
      return total;
    },
    whatsAppMessage(state) { 
      let message = 'Hola, quiero realizar la siguiente compra:  \n\n ';
      
      state.detailsCart.forEach( d=> {
        message +=  `Producto: ${d.product.name} \n`;
        message +=  `Talla: ${d.product.talla} \n`;
        message +=  `Cantidad: ${d.quantity} \n`;
        message +=  `Precio: S/. ${d.product.price} \n`;
        message +=  `SubTotal: S/. ${d.product.price * d.quantity} \n`;
        message +=  `........................................... \n`;
      });
      message +=  `Total a Pagar : S/. ${this.totalPrice} \n\n`;
      message +=  `Muchas Gracias`;
   return encodeURI(message);
    },
    whatsAppLink(){
      return 'https://api.whatsapp.com/send/?phone=51991078766&text=' + this.whatsAppMessage 
    }
  },
  
  actions: {
    onAddProduct(product: Product){
      if (!product.talla) {
        return  alert("Por favor, seleccione una talla");     
      }
      const detailFound = this.detailsCart.find(detail=> detail.product.id === product.id && detail.product.talla === product.talla);
      if(detailFound){
        detailFound.quantity += 1;
        detailFound.totalPriceProduct += detailFound.product.price     
      } else {
        this.detailsCart.push({
          quantity:1,
          totalPriceProduct: product.price,
          product,
          talla: product.talla
        } as CartDetail)
      }
    },
    deleteProduct(productId: number, productTalla: string[]) {
      const index = this.detailsCart.findIndex(detail => detail.product.id === productId && detail.product.talla === productTalla );
      this.detailsCart.splice(index, 1);
    },
    increment(productId: number, productTalla: string[] ){
      const detailFound = this.detailsCart.find(detail=> detail.product.id === productId && detail.product.talla === productTalla  );
     
      if(detailFound){
        detailFound.quantity += 1;
        detailFound.totalPriceProduct += detailFound.product.price
        
      }
    },
    decrement(productId:number,productTalla: string[]){
      const detailFound = this.detailsCart.find(detail=> detail.product.id === productId && detail.product.talla === productTalla);

      if(detailFound){
        detailFound.quantity -= 1;
        detailFound.totalPriceProduct -= detailFound.product.price;
  
        if(detailFound.quantity <1){
          detailFound.quantity = 1;
        }

      }
    },
  }
})