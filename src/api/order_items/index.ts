import { useMutation } from "@tanstack/react-query";
import { TablesInsert } from "@/database.types";
import { supabase } from "@/lib/supabase";

export const useInsertOrderItems = () => {
  return useMutation({
    async mutationFn(items: TablesInsert<"order_item">[]) {
      const { error, data: newProduct } = await supabase
        .from("order_item")
        .insert(items)
        .select();

      if (error) {
        throw new Error(error.message);
      }
      return newProduct;
    },
  });
};
