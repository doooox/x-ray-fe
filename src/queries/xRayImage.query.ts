import { useQuery } from "@tanstack/react-query";
import { IXray } from "../types/xRay.types";
import { QUERY_KEYS } from "../utils/static";
import { xRayService } from "../services/X-ray/XRay";

export const useGetXRayImageQuery = (_id: string) => {
    return useQuery<IXray>([QUERY_KEYS], async () =>
        await xRayService.getSingleXRayImage(_id)
    )
}