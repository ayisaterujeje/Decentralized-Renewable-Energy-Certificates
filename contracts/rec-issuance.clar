;; REC Issuance Contract

;; Define constants
(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_UNAUTHORIZED (err u100))
(define-constant ERR_INVALID_AMOUNT (err u101))

;; Define data variables
(define-data-var next-certificate-id uint u1)

;; Define maps
(define-map certificates
  { certificate-id: uint }
  { owner: principal, amount: uint, facility: (string-ascii 64), timestamp: uint }
)

;; Public functions
(define-public (issue-certificate (amount uint) (facility (string-ascii 64)))
  (let
    (
      (certificate-id (var-get next-certificate-id))
    )
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (> amount u0) ERR_INVALID_AMOUNT)
    (map-set certificates
      { certificate-id: certificate-id }
      { owner: CONTRACT_OWNER, amount: amount, facility: facility, timestamp: block-height }
    )
    (var-set next-certificate-id (+ certificate-id u1))
    (ok certificate-id)
  )
)

;; Read-only functions
(define-read-only (get-certificate (certificate-id uint))
  (map-get? certificates { certificate-id: certificate-id })
)

(define-read-only (get-next-certificate-id)
  (var-get next-certificate-id)
)

