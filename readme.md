# A Q/A Forum with credit and marketplace
- A forum
  - list of question
  - for each question there will be replies
  - replies can also have replies
  - question can be up/down voted
- A credit
  - gains credit when asks/answers a question
  - gains more credit if question is upvoted
  - can exchange between users
- A marketplace
  - can spends credit on workshops / online courses ...

# Backend 
## API

### Questions
- GET /api/questions : get all questions
- POST /api/questions : add a new question
- GET /api/questions/{id} : get question by id
- DELETE /api/questions/{id}
- --
- GET /api/questions/{id}/replies : get replies of a question with id
- GET /api/questions/{question_id}/replies/{reply_id} : get replies with id
- POST /api/questions/{id}/replies : add a new question

### Users
- GET /api/users
- GET /api/users/{id}
- POST /api/users/{id}
- PUT /api/users/{id}
- DELETE /api/users/{id}

### Credit
- POST /api/send/?from={from_id}&to={to_id}

### Marketplace
- GET /api/courses
- GET /api/courses/{id}
- PUT /api/courses/

## Schema

### Question
```javascript
{
    id: String,
    title: String,
    body: String
    addedAt: Date

    replies: [Reply]
}
```
### Reply
```javascript
{
    id: String,
    title: String,
    body: String
    replies: [Reply]
}
```
### User
```javascript
{
    id: String,
    username: String,
    password: secureString,
    credit: int,
    courses: [Course]
}
```
### Course
```javascript
{
    id: String,
    title: String,
    description: String,
    imageUrl: String,
}
```
