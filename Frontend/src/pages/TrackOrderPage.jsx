import {
  PackageSearchIcon,
  SearchIcon,
  ShoppingBagIcon,
  Trash2Icon,
  UserIcon,
  PlusCircleIcon,
  EditIcon,
  MessageCircleIcon,
} from "lucide-react";
import AdminDashboard from "../components/AdminDashboard";
import { useEffect, useState } from "react";
import { useProductStore } from "../store/useProductStore";
import { useAuthStore } from "../store/useAuthStore";
import { useCommerceStore } from "../store/useCommerceStore";
import { useNotificationStore } from "../store/useNotificationStore";
import ProductCard from "../components/ProductCard";
import OrderStatusBadge from "../components/OrderStatusBadge";

function TrackOrderPage() {
  const { products, fetchProducts, loading } = useProductStore();
  const { user, registerCustomer, loginWithPhone, loading: authLoading } = useAuthStore();
  const {
    orders,
    fetchOrders,
    placeOrder,
    placingOrder,
    loadingOrders,
    deleteOrder,
    deletingOrder,
    contactMessages,
    fetchContactMessages,
    deleteContactMessage,
    updateContactMessage,
  } = useCommerceStore();
  const { fetchNotifications } = useNotificationStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [customOrder, setCustomOrder] = useState({
    productName: "",
    quantity: 1,
  });
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    phoneNumber: "",
    password: "",
  });
  const [loginPhone, setLoginPhone] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [editingMessage, setEditingMessage] = useState(null);
  const [editMessageForm, setEditMessageForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (user?.role === "customer") {
      fetchOrders();
      fetchNotifications();
      fetchContactMessages();
    }
  }, [fetchOrders, fetchNotifications, fetchContactMessages, user]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openOrderForm = (product) => {
    setSelectedProduct(product);
    setOrderQuantity(1);
  };

  const closeOrderForm = () => {
    setSelectedProduct(null);
    setOrderQuantity(1);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerCustomer(registerForm);
    setRegisterForm({ fullName: "", phoneNumber: "", password: "" });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginWithPhone(loginPhone, loginPassword);
    setLoginPhone("");
    setLoginPassword("");
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    await placeOrder({
      productId: selectedProduct.id,
      quantity: Number(orderQuantity) || 1,
    });
    closeOrderForm();
    fetchNotifications();
  };

  const handleCustomOrder = async (e) => {
    e.preventDefault();
    if (!customOrder.productName.trim()) return;
    await placeOrder({
      customProductName: customOrder.productName.trim(),
      quantity: Number(customOrder.quantity) || 1,
    });
    setCustomOrder({ productName: "", quantity: 1 });
    fetchNotifications();
  };

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm("ajaja keessan baleesu barbaadani?")) {
      await deleteOrder(orderId);
    }
  };

  const handleEditMessage = (msg) => {
    setEditingMessage(msg);
    setEditMessageForm({
      name: msg.name,
      phone: msg.phone,
      message: msg.message,
    });
  };

  const handleUpdateMessage = async (e) => {
    e.preventDefault();
    if (!editingMessage) return;
    await updateContactMessage(editingMessage.id, editMessageForm);
    setEditingMessage(null);
    setEditMessageForm({ name: "", phone: "", message: "" });
  };

  const isCustomer = user?.role === "customer";
  const isAdmin = user?.role === "admin";

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <div className="card bg-base-100 shadow-lg border border-base-300/60">
          <div className="card-body p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-3">
                  <ShoppingBagIcon className="size-7 sm:size-8 text-primary shrink-0" />
                   Waan barbaadan ajajachuu fi gaafachuu dandeesu.
                </h1>
                <p className="text-base-content/70 mt-2 text-sm sm:text-base">
                  Galma&apos;a yookin Seena bilbila fi password keessan fayyadamuun, sana booda waanta barbaadan ajajadha
                </p>
              </div>
            </div>
          </div>
        </div>

        {isAdmin && <AdminDashboard />}

        {!isCustomer && !isAdmin && (
          <div className="card bg-base-100 shadow-lg border-2 border-primary/20 max-w-md mx-auto">
            <div className="card-body p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-title text-xl sm:text-2xl gap-2">
                  <UserIcon className="size-6 text-primary" />
                  {showRegister ? "Galmee Maamiltoota" : "Seena Bilbila Keessan"}
                </h2>
                <button
                  type="button"
                  className="btn btn-sm btn-ghost btn-primary"
                  onClick={() => setShowRegister(!showRegister)}
                >
                  {showRegister ? "Seena" : "Galma'a"}
                </button>
              </div>

              {showRegister ? (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium">Maqaa Keessan</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Maqaa keessan galchaa...."
                      value={registerForm.fullName}
                      onChange={(e) =>
                        setRegisterForm((f) => ({ ...f, fullName: e.target.value }))
                      }
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium">Lakkoofsa Bilbila</span>
                    </label>
                    <input
                      type="tel"
                      className="input input-bordered w-full"
                      placeholder="Lakkoofsa bilbila galchaa..."
                      value={registerForm.phoneNumber}
                      onChange={(e) =>
                        setRegisterForm((f) => ({ ...f, phoneNumber: e.target.value }))
                      }
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium">Password</span>
                    </label>
                    <input
                      type="password"
                      className="input input-bordered w-full"
                      placeholder="Password galchaa...."
                      value={registerForm.password}
                      onChange={(e) =>
                        setRegisterForm((f) => ({ ...f, password: e.target.value }))
                      }
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-full" disabled={authLoading}>
                    {authLoading ? (
                      <span className="loading loading-spinner loading-sm" />
                    ) : (
                      "Galma'a"
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium">Lakkoofsa Bilbila</span>
                    </label>
                    <input
                      type="tel"
                      className="input input-bordered w-full"
                      placeholder="Lakkoofsa bilbila galchaa..."
                      value={loginPhone}
                      onChange={(e) => setLoginPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium">Password</span>
                    </label>
                    <input
                      type="password"
                      className="input input-bordered w-full"
                      placeholder="Password galchaa...."
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-secondary w-full" disabled={authLoading}>
                    {authLoading ? (
                      <span className="loading loading-spinner loading-sm" />
                    ) : (
                      "Seenati Ajajadha"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {isCustomer && (
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-lg border-2 border-primary/20">
              <div className="card-body p-6">
                <h2 className="card-title text-xl sm:text-2xl gap-2">
                  <UserIcon className="size-6 text-primary" />
                  information keessan guutuu isaa.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium">Maqaa Keessan</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full bg-base-200"
                      value={user.full_name}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium">Lakkoofsa Bilbila Keessan</span>
                    </label>
                    <input
                      type="tel"
                      className="input input-bordered w-full bg-base-200"
                      value={user.phone_number}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300/60">
              <div className="card-body p-6">
                <h2 className="card-title text-xl sm:text-2xl gap-2">
                  <PlusCircleIcon className="size-6 text-primary" />
                  Tajaajiloota Ajajaa Barbaaduu
                </h2>
                <form onSubmit={handleCustomOrder} className="mt-4 space-y-4">
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium">Maqaa Tajaajilaa</span>
                      <span className="label-text-alt text-error">Req</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Tajaajiloota barbaadan galchaa..."
                      value={customOrder.productName}
                      onChange={(e) =>
                        setCustomOrder((prev) => ({ ...prev, productName: e.target.value }))
                      }
                      required
                    />
                  </div>
                 
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={placingOrder || !customOrder.productName.trim()}
                  >
                    {placingOrder ? (
                      <span className="loading loading-spinner loading-sm" />
                    ) : (
                      "Ajaaja Keessan Raawadha"
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300/60">
              <div className="card-body p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h2 className="card-title text-xl sm:text-2xl">Ajaaja Koo</h2>
                  <div className="badge badge-primary">{orders.length}</div>
                </div>

                {loadingOrders ? (
                  <div className="flex justify-center py-10">
                    <span className="loading loading-spinner loading-lg text-primary" />
                  </div>
                ) : orders.length > 0 ? (
                  <div className="space-y-3">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="rounded-2xl border border-base-300 bg-base-100 p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-semibold text-base">
                                {order.product_name}
                              </p>
                              {order.is_custom && (
                                <span className="badge badge-outline badge-xs">maamila</span>
                              )}
                            </div>
                           
                            <div className="mt-2">
                              <OrderStatusBadge status={order.status} />
                            </div>
                            {order.status === "Rejected" && order.rejection_reason && (
                              <p className="text-xs text-error mt-1">
                                Sababa: {order.rejection_reason}
                              </p>
                            )}
                          </div>
                          {order.status === "Placed" && (
                            <button
                              onClick={() => handleDeleteOrder(order.id)}
                              className="btn btn-sm btn-error btn-ghost"
                              disabled={deletingOrder}
                            >
                              <Trash2Icon className="size-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-base-content/60 text-center py-8">
                    Ajaaja meeshalee gootani hin qabdan.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {isCustomer && (
          <div className="card bg-base-100 shadow-lg border border-base-300/60">
            <div className="card-body p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MessageCircleIcon className="size-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Erga Keessan</h2>
                  <p className="text-base-content/60 text-sm">
                    Erga keessan hunda ilaali, sarfuu yookin baleessi.
                  </p>
                </div>
              </div>

              {contactMessages.length > 0 ? (
                <div className="space-y-4">
                  {contactMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="rounded-2xl border border-base-300 bg-base-100 p-4"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-bold text-base">{msg.name}</p>
                            <span className="badge badge-sm badge-outline">{msg.phone}</span>
                          </div>
                          <p className="text-xs text-base-content/60">
                            {new Date(msg.created_at).toLocaleString('am-ET', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleEditMessage(msg)}
                            className="btn btn-sm btn-ghost btn-info"
                          >
                            <EditIcon className="size-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Eergan kun balleessuu barbaadda?")) {
                                deleteContactMessage(msg.id);
                              }
                            }}
                            className="btn btn-sm btn-ghost btn-error"
                          >
                            <Trash2Icon className="size-4" />
                          </button>
                        </div>
                      </div>
                      <div className="bg-base-200 rounded-xl p-3 mt-2">
                        <p className="text-sm text-base-content">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <MessageCircleIcon className="size-12 text-base-content/30 mb-3" />
                  <p className="text-base-content/60">Erga keessan hin jiru.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {editingMessage && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-2">Eerga Sarfuu</h3>
              <form onSubmit={handleUpdateMessage} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Maqaa</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={editMessageForm.name}
                    onChange={(e) =>
                      setEditMessageForm({ ...editMessageForm, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Lakkoofsa Bilbila</span>
                  </label>
                  <input
                    type="tel"
                    className="input input-bordered w-full"
                    value={editMessageForm.phone}
                    onChange={(e) =>
                      setEditMessageForm({ ...editMessageForm, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Erga</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    value={editMessageForm.message}
                    onChange={(e) =>
                      setEditMessageForm({ ...editMessageForm, message: e.target.value })
                    }
                    required
                    rows={3}
                  />
                </div>
                <div className="modal-action">
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => {
                      setEditingMessage(null);
                      setEditMessageForm({ name: "", phone: "", message: "" });
                    }}
                  >
                    Baleesa
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Sarfuu
                  </button>
                </div>
              </form>
            </div>
            <button
              type="button"
              className="modal-backdrop"
              aria-label="Close"
              onClick={() => {
                setEditingMessage(null);
                setEditMessageForm({ name: "", phone: "", message: "" });
              }}
            />
          </div>
        )}



      </div>
    </div>
  );
}
export default TrackOrderPage;
