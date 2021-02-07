import React, { Component } from 'react';
import Allproducts from './Allproducts'
// import '../Css/Allproduct.css';
export class Product extends Component {


state = {
    users : [
      {
        id: 1,
        name: "The Secret",
        image:"../Images/b1.jpg",
        price: 2,
        desc: "The Secret is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name. It is based on the belief of the law of attraction, which claims that thoughts can change a person's life directly.",
    },
    {
        id: 2,
        name: "The Power",
        image:"../Images/b2.jpg",
        price: 2,
        desc: "The Power is a 2010 self-help and spirituality book written by Rhonda Byrne. It is a sequel to the 2006 book The Secret. The book was released on 17 August 2010 along with an audio-book based on it.",
    },
    {
        id: 3,
        name: "The Magic",
        image:"../Images/b3.jpg",
        price: 3,
        desc: "The Magic is a 2012 self-help and spirituality book written by Rhonda Byrne. It is the third book in The Secret series. The book was released on March 6, 2012, as a paperback and e-book. The book is available in 41 languages.",
    },
    {
        id: 4,
        name: "The 48 Laws of Power",
        image:"../Images/b4.jpg",
        price: 5,
        desc: "The 48 Laws of Power is a non-fiction book by American author Robert Greene. The book is a bestseller, selling over 1.2 million copies in the United States, and is popular with prison inmates and celebrities. ",
    },
      {
        id: 5,
        name: "The Subtle Art of Not Giving a F*ck",
        image:"../Images/b5.jpg",
        price: 4,
        desc: "The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life is the second book by blogger and author Mark Manson. In it Manson argues that life's struggles give it meaning.",
    },
    {
        id: 6,
        name: "Malleus Maleficarum",
        image:"../Images/b6.jpg",
        price: 6,
        desc: "The Malleus Maleficarum, usually translated as the Hammer of Witches, is the best known treatise on witchcraft. It was written by the Catholic clergyman Heinrich Kramer and first published in the German city of Speyer in 1486.",
    },
    {
        id: 7,
        name: "Theory of everything",
        image:"../Images/b7.jpg",
        price: 8,
        desc: "A theory of everything, final theory, ultimate theory, or master theory is a hypothetical single, all-encompassing, coherent theoretical framework of physics that fully explains and links together all physical aspects of the universe. ",
    },
    {
        id: 8,
        name: "Voices from Chernobyl",
        image:"../Images/b8.jpg",
        price: 999,
        desc: "Voices from Chernobyl: The Oral History of a Nuclear Disaster is a book about the Chernobyl disaster by the Belarusian Nobel Laureate Svetlana Alexievich. At the time of the disaster, Alexievich was a journalist living in Minsk.",
    },

    ]
    
  };
    render() {
        return (
          
                <Allproducts product={this.state.users}/>
            
        )
    }
}

export default Product
