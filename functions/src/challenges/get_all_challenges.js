const getAllChallenges = (functions, admin) => functions.https.onCall(async () => {
  let data = []

  await admin.firestore().collection('challenges').get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return data
  })
})

module.exports = getAllChallenges