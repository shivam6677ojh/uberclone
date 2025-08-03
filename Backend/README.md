# User Registration & Login API Documentation

## Register User

### Endpoint

```
POST /users/register
```

### Description

Registers a new user. Expects user details in the request body and returns a success message with user info and a JWT token.

### Request Body

```json
{
  "fullname": {
    "firstname": "string, required, min 3 chars",
    "lastname": "string, optional, min 3 chars"
  },
  "email": "string, required, valid email",
  "password": "string, required, min 6 chars"
}
```

#### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Validation Rules

- `fullname.firstname`: Required, minimum 3 characters.
- `fullname.lastname`: Optional, minimum 3 characters if provided.
- `email`: Required, must be a valid email address.
- `password`: Required, minimum 6 characters.

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 201         | User registered successfully. Returns user info and JWT token. |
| 400         | Validation error (missing/invalid fields).  |
| 409         | Email already exists.                       |
| 500         | Internal server error.                      |

---

## Login User

### Endpoint

```
POST /users/login
```

### Description

Authenticates a user. Expects email and password in the request body and returns a success message with user info and a JWT token.

### Request Body

```json
{
  "email": "string, required, valid email",
  "password": "string, required, min 6 chars"
}
```

#### Example

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Validation Rules

- `email`: Required, must be a valid email address.
- `password`: Required, minimum 6 characters.

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | Login successful. Returns user info and JWT token. |
| 400         | Validation error (missing/invalid fields).  |
| 401         | Invalid email or password.                  |
| 500         | Internal server error.                      |

---

## Notes

- All required fields must be present in the request body.
- On validation error, a 400 status code is returned with error details.
- On authentication failure, a 401 status code is returned.
- On success, the response includes the user's id, fullname, email,