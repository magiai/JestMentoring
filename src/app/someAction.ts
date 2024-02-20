export const someAction = (callback: () => void, delay: number) => {
    console.log('1')
    setTimeout(() => {
        console.log('2')
        callback();
    }, delay);
};