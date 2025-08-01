# User Registration API Documentation

## Endpoint

```
POST /users/register
```

## Description

This endpoint registers a new user. It expects user details in the request body and returns a success message with user info and a JWT token on successful registration.

---

## Request Body

Send a JSON object with the following structure:

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

### Example

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

---

## Validation Rules

- `fullname.firstname`: **Required**, minimum 3 characters.
- `fullname.lastname`: Optional, minimum 3 characters if provided.
- `email`: **Required**, must be a valid email address.
- `password`: **Required**, minimum 6 characters.

---

## Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 201         | User registered successfully. Returns user info and JWT token. |
| 400         | Validation error (missing/invalid fields).  |
| 409         | Email already exists.                       |
| 500         | Internal server error.                      |

---

## Notes

- All required fields must be present in the request body.
- If any required field is missing or invalid, a 400 status code is returned with error details.
- If the email is already registered, a 409 status code is returned.
- On success, the response includes the user's id, fullname, email, and