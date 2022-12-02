export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'FIFA 2023',
    price: 69.99,
    description: 'This is technically the last FIFA',
    image: "../assets/fifa.png"
  },
  {
    id: 2,
    name: 'Grand Theft Auto V',
    price: 79.0,
    description:
      'When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each otherA great phone with one of the best cameras',
    image:'../assets/gta.png'
  },
  {
    id: 3,
    name: 'Warframe',
    price: 299.99,
    description:
      'They were called Tenno. Warriors of blade and gun: masters of the Warframe armor. Those that survived the old war were left drifting among the ruins. Now they are needed once more. The Grineer, with their vast armies, are spreading throughout the solar system. A call echoes across the stars summoning the Tenno to an ancient place. They summon you. Allow the Lotus to guide you. She has rescued you from your cryostasis chamber and given you a chance to survive. The Grineer will find you; you must be prepared. The Lotus will teach you the ways of the Warframes and the secrets to unlocking their powers.',
    image: '../assets/wf.png'
  },
  {
    id: 4,
    name: 'Age of Empires II',
    price: 129.99,
    description:
      'Age of Empires II: Definitive Edition is a 2019 real-time strategy video game developed by Forgotten Empires and published by Xbox Game Studios. It is a remaster of the 1999 game Age of Empires II: The Age of Kings, celebrating the 20th anniversary of the original.',
    image: '../assets/aoe.png'
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
