# Khwela API Documentation

## Overview

This document provides detailed API documentation for all Supabase Edge Functions used in the Khwela ride-hailing platform. All endpoints require authentication unless specified otherwise.

**Base URL**: `https://[project-ref].supabase.co/functions/v1`

**Authentication**: All authenticated endpoints require a valid JWT token in the `Authorization` header:
```
Authorization: Bearer <jwt_token>
```

---

## Table of Contents

1. [Fare & Pricing](#fare--pricing)
2. [Trip Management](#trip-management)
3. [Safety & Verification](#safety--verification)
4. [Payments & Wallet](#payments--wallet)
5. [Notifications](#notifications)
6. [Admin Operations](#admin-operations)
7. [Analytics & Reporting](#analytics--reporting)
8. [Error Codes](#error-codes)

---

## Fare & Pricing

### Calculate Fare

**Endpoint**: `POST /calculate-fare`

**Description**: Calculate trip fare based on distance and payment method

**Authentication**: Required

**Request Body**:
```json
{
  "pickup_lat": -26.2041,
  "pickup_lng": 28.0473,
  "dropoff_lat": -26.1076,
  "dropoff_lng": 28.0567,
  "payment_method": "digital", // "digital" or "cash"
  "trip_type": "standard" // "standard", "premium", "shared"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "distance_km": 12.5,
    "duration_minutes": 18,
    "base_rate": 25.00,
    "rate_per_km": 12.00,
    "distance_charge": 150.00,
    "company_fee": 10.00,
    "calculated_fare": 185.00,
    "rounded_fare": 190.00, // Only for cash payments
    "final_fare": 190.00,
    "payment_method": "cash",
    "currency": "ZAR",
    "breakdown": {
      "base": 25.00,
      "distance": 150.00,
      "company_fee": 10.00,
      "rounding": 5.00
    }
  }
}
```

**Error Responses**:
- `400` - Invalid coordinates or payment method
- `401` - Unauthorized
- `500` - Calculation error

---

### Get Fare Estimate

**Endpoint**: `POST /fare-estimate`

**Description**: Get fare estimate without creating a trip (public endpoint)

**Authentication**: Not Required

**Request Body**:
```json
{
  "pickup_lat": -26.2041,
  "pickup_lng": 28.0473,
  "dropoff_lat": -26.1076,
  "dropoff_lng": 28.0567
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "distance_km": 12.5,
    "estimated_duration_minutes": 18,
    "digital_fare": 185.00,
    "cash_fare": 190.00,
    "currency": "ZAR"
  }
}
```

---

## Trip Management

### Create Trip Request

**Endpoint**: `POST /create-trip`

**Description**: Create a new trip request from a rider

**Authentication**: Required (Rider only)

**Request Body**:
```json
{
  "pickup_address": "123 Main St, Johannesburg",
  "pickup_lat": -26.2041,
  "pickup_lng": 28.0473,
  "dropoff_address": "456 Oak Ave, Pretoria",
  "dropoff_lat": -26.1076,
  "dropoff_lng": 28.0567,
  "payment_method": "digital",
  "notes": "Please call when you arrive",
  "scheduled_time": null // ISO 8601 format for scheduled rides
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "trip_id": "trip_abc123xyz",
    "status": "pending",
    "estimated_fare": 185.00,
    "estimated_arrival": "2024-01-15T10:25:00Z",
    "qr_code": "data:image/png;base64,..."
  }
}
```

**Error Responses**:
- `400` - Invalid request data
- `401` - Unauthorized or not a rider
- `402` - Insufficient wallet balance
- `500` - Server error

---

### Accept Trip (Driver)

**Endpoint**: `POST /accept-trip`

**Description**: Driver accepts a pending trip request

**Authentication**: Required (Driver only)

**Request Body**:
```json
{
  "trip_id": "trip_abc123xyz"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "trip_id": "trip_abc123xyz",
    "status": "accepted",
    "rider": {
      "name": "John Doe",
      "phone": "+27123456789",
      "rating": 4.8
    },
    "pickup_details": {
      "address": "123 Main St, Johannesburg",
      "lat": -26.2041,
      "lng": 28.0473
    }
  }
}
```

**Error Responses**:
- `400` - Trip already accepted or invalid trip ID
- `401` - Unauthorized or not a driver
- `403` - Driver not eligible (compliance issues)
- `404` - Trip not found
- `500` - Server error

---

### Start Trip

**Endpoint**: `POST /start-trip`

**Description**: Driver starts the trip after QR verification

**Authentication**: Required (Driver only)

**Request Body**:
```json
{
  "trip_id": "trip_abc123xyz",
  "driver_location_lat": -26.2041,
  "driver_location_lng": 28.0473
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "trip_id": "trip_abc123xyz",
    "status": "in_progress",
    "started_at": "2024-01-15T10:30:00Z"
  }
}
```

---

### Complete Trip

**Endpoint**: `POST /complete-trip`

**Description**: Driver completes the trip

**Authentication**: Required (Driver only)

**Request Body**:
```json
{
  "trip_id": "trip_abc123xyz",
  "actual_distance_km": 12.8,
  "dropoff_location_lat": -26.1076,
  "dropoff_location_lng": 28.0567
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "trip_id": "trip_abc123xyz",
    "status": "completed",
    "final_fare": 190.00,
    "driver_earnings": 180.00,
    "completed_at": "2024-01-15T10:48:00Z"
  }
}
```

---

### Cancel Trip

**Endpoint**: `POST /cancel-trip`

**Description**: Cancel a trip (rider or driver)

**Authentication**: Required

**Request Body**:
```json
{
  "trip_id": "trip_abc123xyz",
  "reason": "Change of plans",
  "cancelled_by": "rider" // "rider" or "driver"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "trip_id": "trip_abc123xyz",
    "status": "cancelled",
    "cancellation_fee": 25.00, // If applicable
    "refund_amount": 160.00
  }
}
```

---

## Safety & Verification

### Verify Facial Recognition

**Endpoint**: `POST /verify-facial-recognition`

**Description**: Verify driver identity using facial recognition

**Authentication**: Required (Driver only)

**Request Body**:
```json
{
  "driver_id": "driver_xyz789",
  "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
  "verification_type": "scheduled" // "scheduled", "random", "manual"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "verification_id": "verify_abc123",
    "status": "verified",
    "confidence_score": 0.98,
    "verified_at": "2024-01-15T08:00:00Z",
    "next_verification": "2024-01-15T20:00:00Z"
  }
}
```

**Error Responses**:
- `400` - Invalid image format
- `401` - Unauthorized
- `403` - Verification failed (low confidence)
- `429` - Too many verification attempts
- `500` - Server error

---

### Generate QR Code

**Endpoint**: `POST /generate-qr-code`

**Description**: Generate QR code for trip verification

**Authentication**: Required

**Request Body**:
```json
{
  "trip_id": "trip_abc123xyz",
  "type": "trip_verification" // "trip_verification", "payment", "identity"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "qr_code": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "qr_data": "khwela://trip/verify/trip_abc123xyz",
    "expires_at": "2024-01-15T11:00:00Z"
  }
}
```

---

### Verify QR Code

**Endpoint**: `POST /verify-qr-code`

**Description**: Verify scanned QR code for trip

**Authentication**: Required

**Request Body**:
```json
{
  "qr_data": "khwela://trip/verify/trip_abc123xyz",
  "scanned_by": "driver", // "driver" or "rider"
  "location_lat": -26.2041,
  "location_lng": 28.0473
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "trip_id": "trip_abc123xyz",
    "verification_status": "verified",
    "verified_at": "2024-01-15T10:30:00Z",
    "can_start_trip": true
  }
}
```

**Error Responses**:
- `400` - Invalid QR code format
- `401` - Unauthorized
- `403` - QR code expired or already used
- `404` - Trip not found
- `500` - Server error

---

### Trigger SOS Alert

**Endpoint**: `POST /trigger-sos`

**Description**: Trigger emergency SOS alert

**Authentication**: Required

**Request Body**:
```json
{
  "trip_id": "trip_abc123xyz",
  "emergency_type": "safety_concern", // "safety_concern", "accident", "medical", "other"
  "location_lat": -26.2041,
  "location_lng": 28.0473,
  "message": "Need immediate assistance",
  "contacts": ["+27123456789"] // Emergency contacts to notify
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "sos_id": "sos_abc123",
    "status": "active",
    "emergency_services_notified": true,
    "response_time_estimate": "5-10 minutes",
    "tracking_link": "https://khwela.app/emergency/track/sos_abc123"
  }
}
```

---

## Payments & Wallet

### Top Up Wallet

**Endpoint**: `POST /wallet-topup`

**Description**: Add funds to rider wallet

**Authentication**: Required (Rider only)

**Request Body**:
```json
{
  "amount": 500.00,
  "payment_method": "card", // "card", "eft", "mobile_money"
  "payment_provider": "stripe", // "stripe", "payfast", "paystack"
  "currency": "ZAR"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "transaction_id": "txn_abc123",
    "amount": 500.00,
    "status": "pending",
    "payment_url": "https://payment.provider.com/checkout/abc123",
    "expires_at": "2024-01-15T11:00:00Z"
  }
}
```

---

### Process Trip Payment

**Endpoint**: `POST /process-trip-payment`

**Description**: Process payment for completed trip

**Authentication**: System (called internally)

**Request Body**:
```json
{
  "trip_id": "trip_abc123xyz",
  "rider_id": "rider_xyz789",
  "driver_id": "driver_abc456",
  "amount": 190.00,
  "payment_method": "digital"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "transaction_id": "txn_xyz789",
    "trip_id": "trip_abc123xyz",
    "amount_charged": 190.00,
    "driver_earnings": 180.00,
    "company_fee": 10.00,
    "rider_balance": 310.00,
    "status": "completed"
  }
}
```

---

### Get Wallet Balance

**Endpoint**: `GET /wallet-balance`

**Description**: Get current wallet balance

**Authentication**: Required (Rider only)

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "balance": 310.00,
    "currency": "ZAR",
    "pending_transactions": 0,
    "last_updated": "2024-01-15T10:48:00Z"
  }
}
```

---

### Driver Payout Request

**Endpoint**: `POST /driver-payout`

**Description**: Request payout of driver earnings

**Authentication**: Required (Driver only)

**Request Body**:
```json
{
  "amount": 1500.00,
  "bank_account": "****1234",
  "payout_method": "bank_transfer" // "bank_transfer", "mobile_money"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "payout_id": "payout_abc123",
    "amount": 1500.00,
    "status": "pending",
    "estimated_arrival": "2024-01-16T10:00:00Z",
    "reference": "KHWELA-PAYOUT-ABC123"
  }
}
```

---

## Notifications

### Send Notification

**Endpoint**: `POST /send-notification`

**Description**: Send push notification to user

**Authentication**: System (internal use)

**Request Body**:
```json
{
  "user_id": "user_abc123",
  "notification_type": "trip_accepted", // "trip_accepted", "driver_arrived", "trip_completed", etc.
  "title": "Driver Accepted Your Trip",
  "message": "John will arrive in 5 minutes",
  "data": {
    "trip_id": "trip_abc123xyz",
    "driver_name": "John"
  },
  "priority": "high" // "high", "normal", "low"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "notification_id": "notif_abc123",
    "sent_at": "2024-01-15T10:30:00Z",
    "status": "delivered"
  }
}
```

---

### Send SMS

**Endpoint**: `POST /send-sms`

**Description**: Send SMS notification

**Authentication**: System (internal use)

**Request Body**:
```json
{
  "phone_number": "+27123456789",
  "message": "Your trip has been confirmed. Trip ID: trip_abc123xyz",
  "sms_type": "trip_confirmation" // "trip_confirmation", "otp", "emergency", "marketing"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "sms_id": "sms_abc123",
    "status": "sent",
    "sent_at": "2024-01-15T10:30:00Z"
  }
}
```

---

## Admin Operations

### Get Admin Metrics

**Endpoint**: `GET /admin-metrics`

**Description**: Get platform metrics and statistics

**Authentication**: Required (Admin only)

**Query Parameters**:
- `start_date` (optional): Start date for metrics (ISO 8601)
- `end_date` (optional): End date for metrics (ISO 8601)
- `metric_type` (optional): "trips", "revenue", "users", "all"

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "period": {
      "start": "2024-01-01T00:00:00Z",
      "end": "2024-01-15T23:59:59Z"
    },
    "users": {
      "total_riders": 15420,
      "total_drivers": 3240,
      "active_riders": 8750,
      "active_drivers": 2100,
      "new_signups": 245
    },
    "trips": {
      "total": 45820,
      "completed": 43200,
      "cancelled": 2620,
      "completion_rate": 94.28
    },
    "revenue": {
      "total": 8693400.00,
      "company_fees": 458200.00,
      "driver_earnings": 8235200.00,
      "average_trip_value": 189.66
    },
    "safety": {
      "sos_alerts": 12,
      "average_response_time_minutes": 8.5,
      "facial_verifications": 6480,
      "verification_success_rate": 98.7
    }
  }
}
```

---

### Flag User

**Endpoint**: `POST /flag-user`

**Description**: Flag a user for review

**Authentication**: Required (Admin only)

**Request Body**:
```json
{
  "user_id": "user_abc123",
  "user_type": "driver", // "driver" or "rider"
  "reason": "Multiple cancellations",
  "severity": "medium", // "low", "medium", "high"
  "notes": "User has cancelled 5 trips in the last 24 hours",
  "action_taken": "warning_sent" // "none", "warning_sent", "suspended", "banned"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "flag_id": "flag_abc123",
    "user_id": "user_abc123",
    "status": "pending_review",
    "flagged_at": "2024-01-15T10:30:00Z",
    "assigned_to": "admin_xyz789"
  }
}
```

---

### Update User Status

**Endpoint**: `POST /update-user-status`

**Description**: Update user account status

**Authentication**: Required (Admin only)

**Request Body**:
```json
{
  "user_id": "user_abc123",
  "status": "suspended", // "active", "suspended", "banned", "pending_verification"
  "reason": "Policy violation",
  "duration_days": 7, // For temporary suspensions
  "notify_user": true
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "user_id": "user_abc123",
    "previous_status": "active",
    "new_status": "suspended",
    "effective_until": "2024-01-22T10:30:00Z",
    "notification_sent": true
  }
}
```

---

## Analytics & Reporting

### Generate Driver Report

**Endpoint**: `POST /generate-driver-report`

**Description**: Generate comprehensive driver performance report

**Authentication**: Required (Driver or Admin)

**Request Body**:
```json
{
  "driver_id": "driver_abc456",
  "period": "monthly", // "daily", "weekly", "monthly", "custom"
  "start_date": "2024-01-01",
  "end_date": "2024-01-31",
  "include_sections": ["earnings", "trips", "ratings", "compliance"]
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "report_id": "report_abc123",
    "driver_id": "driver_abc456",
    "period": {
      "start": "2024-01-01T00:00:00Z",
      "end": "2024-01-31T23:59:59Z"
    },
    "earnings": {
      "total": 45600.00,
      "trips_completed": 240,
      "average_per_trip": 190.00,
      "peak_hours_earnings": 28400.00,
      "off_peak_earnings": 17200.00
    },
    "trips": {
      "total": 240,
      "completed": 235,
      "cancelled": 5,
      "completion_rate": 97.92,
      "average_rating": 4.8,
      "total_distance_km": 3050
    },
    "compliance": {
      "facial_verifications": 60,
      "verification_rate": 100.0,
      "documents_valid": true,
      "badge_level": "Gold"
    },
    "report_url": "https://khwela.app/reports/driver_abc456_202401.pdf"
  }
}
```

---

### Export Transaction History

**Endpoint**: `POST /export-transactions`

**Description**: Export transaction history in various formats

**Authentication**: Required

**Request Body**:
```json
{
  "user_id": "user_abc123",
  "start_date": "2024-01-01",
  "end_date": "2024-01-31",
  "format": "csv", // "csv", "pdf", "json"
  "transaction_types": ["trip_payment", "wallet_topup", "payout"]
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "export_id": "export_abc123",
    "file_url": "https://khwela.app/exports/transactions_202401.csv",
    "expires_at": "2024-01-16T10:30:00Z",
    "record_count": 45
  }
}
```

---

## Error Codes

### Standard Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      "field": "specific_field",
      "reason": "Detailed reason for error"
    },
    "timestamp": "2024-01-15T10:30:00Z",
    "request_id": "req_abc123"
  }
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `UNAUTHORIZED` | 401 | Invalid or missing authentication token |
| `FORBIDDEN` | 403 | User doesn't have permission for this action |
| `NOT_FOUND` | 404 | Requested resource not found |
| `INVALID_REQUEST` | 400 | Request body validation failed |
| `INSUFFICIENT_FUNDS` | 402 | Wallet balance too low |
| `TRIP_ALREADY_ACCEPTED` | 400 | Trip has already been accepted by another driver |
| `TRIP_CANCELLED` | 400 | Trip has been cancelled |
| `VERIFICATION_FAILED` | 403 | Facial recognition or QR verification failed |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests in a short period |
| `PAYMENT_FAILED` | 402 | Payment processing failed |
| `SERVER_ERROR` | 500 | Internal server error |
| `SERVICE_UNAVAILABLE` | 503 | Service temporarily unavailable |
| `DRIVER_NOT_COMPLIANT` | 403 | Driver doesn't meet compliance requirements |
| `INVALID_COORDINATES` | 400 | Invalid latitude or longitude values |
| `DOCUMENT_EXPIRED` | 403 | Required document has expired |
| `QR_CODE_EXPIRED` | 403 | QR code has expired |
| `INVALID_ROLE` | 403 | User role doesn't match required role |

---

## Rate Limiting

All authenticated endpoints are subject to rate limiting:

- **Default**: 100 requests per minute per user
- **Public endpoints**: 30 requests per minute per IP
- **Payment endpoints**: 10 requests per minute per user
- **Admin endpoints**: 200 requests per minute per admin

Rate limit headers are included in all responses:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1705315200
```

---

## Webhooks

### Webhook Event Types

The platform sends webhooks for the following events:

- `trip.created`
- `trip.accepted`
- `trip.started`
- `trip.completed`
- `trip.cancelled`
- `payment.success`
- `payment.failed`
- `sos.triggered`
- `verification.completed`
- `verification.failed`
- `payout.completed`

### Webhook Payload Format

```json
{
  "event_id": "evt_abc123",
  "event_type": "trip.completed",
  "timestamp": "2024-01-15T10:48:00Z",
  "data": {
    "trip_id": "trip_abc123xyz",
    "status": "completed",
    "final_fare": 190.00
  }
}
```

---

## Testing

### Test Mode

All endpoints support test mode for development. Add the header:
```
X-Test-Mode: true
```

Test mode will:
- Use test payment providers
- Not charge real money
- Not send real SMS/emails
- Not trigger real facial recognition
- Return mock data for external services

### Test Credentials

**Test Rider**:
- Email: `test.rider@khwela.app`
- Password: `TestRider123!`

**Test Driver**:
- Email: `test.driver@khwela.app`
- Password: `TestDriver123!`

**Test Admin**:
- Email: `test.admin@khwela.app`
- Password: `TestAdmin123!`

---

## Support

For API support and questions:
- **Email**: api-support@khwela.app
- **Documentation**: https://docs.khwela.app
- **Status Page**: https://status.khwela.app
- **Developer Portal**: https://developers.khwela.app

---

**Version**: 1.0.0  
**Last Updated**: January 2024  
**Maintained by**: Khwela Development Team
