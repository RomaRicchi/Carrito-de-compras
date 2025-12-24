import type { CartItem, Cap } from '../types/Cap'


type HeaderProps = {
  cart: CartItem[]
  removeFromCart: (id: Cap['id']) => void
  decreaseQuantity: (id: Cap['id']) => void
  increaseQuantity: (id: Cap['id']) => void
  clearCart: () => void
  isEmpty: boolean
  cartTotal: number
}

export default function Header({
  cart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  isEmpty,
  cartTotal
}: HeaderProps) {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="/">
              <img className="img-fluid" src="/img/logo.png" alt="imagen logo" />
              <h1 className="text-white fw-bold m-0">CAPSTONE</h1>
            </a>
          </div>

          <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

              <div id="carrito" className="bg-white p-3">
                {isEmpty ? (
                  <p className="text-center">El carrito está vacío</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map(cap => (
                          <tr key={cap.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/img/${cap.image}.jpg`}
                                alt="imagen gorra"
                              />
                            </td>
                            <td>{cap.name}</td>
                            <td className="fw-bold">${cap.price}</td>
                            <td className="flex align-items-start gap-4">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => decreaseQuantity(cap.id)}
                              >
                                -
                              </button>

                              {cap.quantity}

                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => increaseQuantity(cap.id)}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => removeFromCart(cap.id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">
                      Total a pagar: <span className="fw-bold">${cartTotal}</span>
                    </p>
                  </>
                )}

                <button
                  className="btn btn-dark w-100 mt-3 p-2"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
