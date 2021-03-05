import firebase from "./firebase";


const db = firebase.firestore()

export async function uploadData(collection, dataItem,idx){
    try {
        const ref = await db.collection(collection)
            .doc(dataItem.data[0].nasa_id)
            .set( {...{count:idx},...{...dataItem.data[0],...dataItem.links[0]}})
        console.log(`uploading ${collection} to firestore!`)
    }catch(e){
        // console.log(e)
    }
}

export async function getData(query,num,lastVisible,setLastVisible,setToBeLoaded){
    // console.log("ref is" ,ref)
    // if(lastVisible==null){ //if lastvisible is null, we are initialising the data
    //     console.log("last visible",lastVisible)
    let ref
    if (lastVisible){
        ref = db.collection(query)
            .orderBy("count")
            .startAfter(lastVisible)
            .limit(num)
    }else {
        ref = db.collection(query).orderBy("count").limit(num)
    }

    await ref.get().then( (snapshot)=>{
        setLastVisible(snapshot.docs[snapshot.docs.length-1])
        let arr=[]
        snapshot.forEach(doc=>{
            // console.log(doc.data())
            arr.push(doc.data())
        })
        setToBeLoaded(arr)
    })
}

export async function addQuery(query){
    await db.collection("query").doc(query).set({query:query})
}

export async function checkQuery(query,setQueriesDb){
    const check = await db.collection("query").doc(query)

    check.get().then((docSnapshot)=>{
        if (docSnapshot.exists){
            console.log("query is in  DB !!")
            setQueriesDb(true)
        }else{
            console.log("query is not in DB :(")
            setQueriesDb(false)
        }
    })
}