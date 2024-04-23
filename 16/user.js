export const usr = {
    name: 'user',
    age: 34
}

export const showUser = () => {
    console.log(`Age: ${usr.age}, Last Name: ${usr.lastName}`);
    return usr
}


showUser();


const testData = [1,2,3,4]