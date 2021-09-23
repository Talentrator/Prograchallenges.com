const getAllChallenges = (functions, admin) => functions.https.onRequest(async (request, response) => {
  let data = []

  await admin.firestore().collection('challenges').get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    response.json(data)  
  })
})

module.exports = getAllChallenges