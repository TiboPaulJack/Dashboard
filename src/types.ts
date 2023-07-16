

export interface User {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    role: string,
    title: string,
    status: string,
    access: string,
}

export interface Product {
    id: number,
    name: string,
    category: string,
    category_id: number,
    description: string,
    status: string,
    sellPrice: number,
    isEdited: boolean,
    costPrice: number,
    quantity: number,
    color: string,
    category_name: string,
    color_id: number,
    checked: boolean,
    size: string,
    size_id: number,
    isDiscounted: boolean,
    discountType: string | null,
    discountAmount: number | null,
    discountStartDate: string | null,
    discountEndDate: string | null,
    ispublished: boolean,
    publishedStartDate: string,
    publishedEndDate: string,
    images: string[],
}

export interface Task {
    id: number,
    title: string,
    content: string,
    status: string,
    color: string,
    user_id: number,
    checked: boolean,
}
