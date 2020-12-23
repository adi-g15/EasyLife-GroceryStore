const sabji_list = [
    {
        name: 'Tomato',
        price: 45,
        unit: 'kg',
        visible: true
    },
    {
        name: 'Onion',
        price: 30,
        unit: 'kg',
        visible: true
    },
    {
        name: 'Milk',
        price: 45,
        unit: 'litre',
        visible: true
    },
    {
        name: 'Potato',
        price: 15,
        unit: 'kg',
        visible: true
    },
]

export default (limit = 20) => {
    let list = []
    // call API here
    list = [...sabji_list]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(list)
        }, 500);
    })
}
