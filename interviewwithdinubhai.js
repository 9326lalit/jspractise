
const test= () =>
{
    let a="Lalit";
    console.log(a.length)

    const test2 = (a="dinesh") =>
    {
        console.log(a)
    }

    return test2;
}

test();
const data = test()
console.log(data());
// closure