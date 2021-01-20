import React,{useState} from "react";
import { Input } from "../Input";
import { Button } from "../Button"
import { FaSearch } from "react-icons/fa";
import { SearchForm } from "./styles";
import { Link } from "gatsby"
import { navigate, useLocation } from "@reach/router"
import queryString from "query-string";

export function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const { search } = useLocation()
      const c = queryString.parse(search)?.c || "";
  const handleSubmit = (e) => {
    e.preventDefault();

    if (c) {
       navigate(`/all-products?s=${encodeURIComponent(searchTerm)}&c =${encodeURIComponent(c)}`)
    } else {
         navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`)
    }


  }
  return (
    <>
    <SearchForm onSubmit={(e)=>handleSubmit(e)}>
      <Input value={searchTerm} onChange={(e)=>setSearchTerm(e.currentTarget.value)}
          placeholder="Search" />
        <Link to={`/all-products?s=${encodeURIComponent(searchTerm)}`}>
      <Button>
       <FaSearch/>
      </Button>
</Link>
      </SearchForm>

      </>
   )
}
