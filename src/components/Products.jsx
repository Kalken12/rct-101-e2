import React, { useState } from "react";
import { useEffect } from "react";

import AddProduct from './AddProduct'
import Product from './Product'
import Pagination from './Pagination'
import style from './Products.module.css'
import axios from 'axios'
import { extendTheme, ChakraProvider, styled, StylesProvider } from '@chakra-ui/react'
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure, ModalHeader
  , ModalCloseButton,
  ModalBody,
  FormControl
  , FormLabel,
  Input,
  ModalFooter,
  Grid,
  
} from '@chakra-ui/react'


 
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [emdata, setEmData] = useState()
  const [form, setForm] = useState({


    title: "",
    category: "",
    gender: "",
    imageSrc: "",
    price: ""

  })
  

  const onchange = (e) => {
    console.log("e", e)
    let { name, value } = e.target
    setForm({
      ...form ,
      [name]: value 
    })
     console.log(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/products", {
      title: form.title,
      category: form.category,
      gender: form.gender,
      imageSrc: "",
      price: form.price

    }).then(res => {
      console.log(res.data)
    })
  }
 
//   fetch(`http://localhost:8080/products`)
// .then((r)=>r.json())
// .then((d)=>{
//   console.log("ddd",d)
//   setEmData(d)
// })
   
    // setEmData(emdata)
    // console.log("emd",emdata)


  

 
 
   
  

 
  return (
    <Grid>
   
    

        <Button className={style.btnmain} onClick={onOpen}>Add Product</Button>


        <Modal isOpen={isOpen} onClose={onClose} className={style.modal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={onchange} name="title" value={form.title} />
                <select onChange={onchange} name="category" value={form.category}>
                  <option value="Shirt">Shirt</option>
                  <option value="Pant">Pant</option>
                  <option value="Jeans">Jeans</option>
                </select>
                <div>
                  <label>Male</label>
                  <input type="radio" name="gender" onChange={onchange} value={"male"} />
                  <label>Female</label>
                  <input type="radio" name="gender" onChange={onchange} value={"female"} />
                  <label>Unisex</label>
                  <input type="radio" name="gender" onChange={onchange} value={"unisex"} />
                </div>
                <input type="number" onChange={onchange} name="price" value={form.price} />
                <input type="submit" />
              </form>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      

   <Flex>
    {/* {
      emdata.map((el)=>{
    <Product key={el.id} product={el}  />

    }) */}
  }
</Flex>
  
   
    
    <Pagination/>
    </Grid>
  );
};

export default Products;
