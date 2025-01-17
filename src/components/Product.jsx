import React from "react";
import { extendTheme, ChakraProvider, styled, StylesProvider } from '@chakra-ui/react'

import {
   Text ,
 Image ,
   Box ,
  Stack ,
   Heading,
   Tag,
   TagLabel 
}from '@chakra-ui/react'


const Product = ({props}) => {
console.log("product..", ...props)
 


 let {  title, category , gender, imageSrc, price} = props ;
   console.log("title", title)

  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={props.imageSrc} />
      <Text data-cy="product-category">{props.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{props.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{props.title}</Heading>
      <Box data-cy="product-price">{props.price}</Box>
    </Stack>
  );
};

export default Product;
