// 優惠券基本型別
export type CouponData = {
    id: string
    title: string
    is_enabled: number
    percent: number
    due_date: number | null
    code: string
  }
  
  // 建立優惠券參數型別
  export type CreateCouponParams = Omit<CouponData, 'id'>
  
  // 編輯優惠券參數型別
  export type EditCouponParams = {
    id: string
    data: Omit<CouponData, 'id'>
  }
  
  // 分頁資訊型別
  export type Pagination = {
    total_pages: number
    current_page: number
    has_pre: boolean
    has_next: boolean
    category: string
  }
  
  // API 回應型別
  export type GetCouponsResponse = {
    success: boolean
    coupons: Array<CouponData>
    pagination: Pagination
    messages: unknown[]
  }
  
  // 訊息回應型別
  type MessageResponse = {
    success: boolean
    message: string
  }
  
  export type CreateCouponResponse = MessageResponse
  export type EditCouponResponse = MessageResponse
  export type DeleteCouponResponse = MessageResponse
  