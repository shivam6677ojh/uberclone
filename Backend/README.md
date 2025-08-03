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


## Get User Profile

### Endpoint

```
GET /users/profile
```

### Description

Retrieves the authenticated user's profile information. Requires a valid JWT token in the request (via cookie or Authorization header).

### Authentication

- Requires JWT token (sent as a cookie named `token` or in the `Authorization: Bearer <token>` header).

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | User profile retrieved successfully. Returns user info. |
| 401         | Unauthorized. No token provided or token invalid.       |
| 500         | Internal server error.                      |

### Example Response

```json
{
  "message": "User profile retrieved successfully",
  "user": {
    "id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

## Logout User

### Endpoint

```
GET /users/logout
```

### Description

Logs out the authenticated user by blacklisting the JWT token and clearing the authentication cookie.

### Authentication

- Requires JWT token (sent as a cookie named `token` or in the `Authorization: Bearer <token>` header).

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | User logged out successfully.               |
| 401         | Unauthorized. No token provided.            |
| 500         | Internal server error.                      |

### Example Response

```json
{
  "message": "User logged out successfully"
}
```

## Register Captain

### Endpoint

```
POST /captains/register
```

### Description

Registers a new captain. Expects captain details and vehicle information in the request body. Returns a success message with captain info and a JWT token.

### Request Body

```json
{
  "fullname": {
    "firstname": "string, required, min 3 chars",
    "lastname": "string, optional, min 3 chars"
  },
  "email": "string, required, valid email",
  "password": "string, required, min 6 chars",
  "vehicle": {
    "vehiclecolor": "string, required, min 3 chars",
    "vehicleplate": "string, required, unique, min 3 chars",
    "vehiclecapacity": "number, required, min 1",
    "vehicletype": "string, required, one of ['car', 'bike', 'auto']"
  }
}
```

#### Example

```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "strongPassword123",
  "vehicle": {
    "vehiclecolor": "Red",
    "vehicleplate": "ABC123",
    "vehiclecapacity": 4,
    "vehicletype": "car"
  }
}
```

### Validation Rules

- `fullname.firstname`: Required, minimum 3 characters.
- `fullname.lastname`: Optional, minimum 3 characters if provided.
- `email`: Required, must be a valid email address, unique.
- `password`: Required, minimum 6 characters.
- `vehicle.vehiclecolor`: Required, minimum 3 characters.
- `vehicle.vehicleplate`: Required, unique, minimum 3 characters.
- `vehicle.vehiclecapacity`: Required, minimum 1.
- `vehicle.vehicletype`: Required, must be one of `car`, `bike`, or `auto`.

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 201         | Captain registered successfully. Returns captain info and JWT token. |
| 400         | Validation error (missing/invalid fields).  |
| 409         | Email or vehicle plate already exists.      |
| 500         | Internal server error.                      |

---

## Login Captain

### Endpoint

```
POST /captains/login
```

### Description

Authenticates a captain. Expects email and password in the request body and returns a success message with captain info and a JWT token.

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
  "email": "alice.smith@example.com",
  "password": "strongPassword123"
}
```

### Validation Rules

- `email`: Required, must be a valid email address.
- `password`: Required, minimum 6 characters.

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | Login successful. Returns captain info and JWT token. |
| 400         | Validation