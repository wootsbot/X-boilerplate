#!/bin/sh

echo "Setting the .env environments variables"

## APPEND VARIABLES TO '.env' FILE

# Prevents writing in the last non-empty line
echo "" >> .env

echo "RESEND_API_KEY=$RESEND_API_KEY" >> .env
echo "RESEND_DOMAIN=$RESEND_DOMAIN" >> .env

echo "AUTH_GITHUB_ID=$AUTH_GITHUB_ID" >> .env
echo "AUTH_GITHUB_SECRET=$AUTH_GITHUB_SECRET" >> .env
echo "AUTH_SECRET=$AUTH_SECRET" >> .env

echo "STRIPE_SECRET_KEY=$STRIPE_SECRET_KEY" >> .env
echo "STRIPE_PUBLISHABLE_KEY=$STRIPE_PUBLISHABLE_KEY" >> .env

echo "PERSONAL_GITHUB_TOKEN=$PERSONAL_GITHUB_TOKEN" >> .env
