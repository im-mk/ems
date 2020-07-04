output "s3_arn" {
    description = "S3 arn. It will be the format arn:aws:s3:::bucketname"
    value       =   aws_s3_bucket.s3_web.arn
}