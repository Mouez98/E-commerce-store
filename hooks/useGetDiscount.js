

const useGetDiscount = (disc,price) => {
    let discount = !disc ? false : price - ((disc / 100) * price).toFixed();
  return (
    {
        priceAfterDiscount: discount,
        discount: disc
    }
  )
}

export default useGetDiscount