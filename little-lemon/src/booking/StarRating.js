import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HStack, Box, VisuallyHidden } from "@chakra-ui/react";

export default function StarRating({ rating, setRating, count, size }) {
  const [hover, setHover] = useState(null);

  return (
    <HStack spacing={"4px"}>
      {[...Array(count || 5)].map((_, index) => {
        const ratingValue = index + 1;
        
        return (
          <Box
            as="label"
            key={index}
            position="relative"
            cursor="pointer"

            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
  
            <VisuallyHidden>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                checked={rating === ratingValue}
                onChange={() => setRating(ratingValue)}
              />
            </VisuallyHidden>

            <FaStar
              size={size || 30}
              style={{
                transition: "color 200ms",
                display: "inline-block"
              }}

              onClick={() => setRating(ratingValue)}
            />
          </Box>
        );
      })}
    </HStack>
  );
}