get_subnet()
{
    ip -o -f inet addr show | awk '/scope global/ {print $4}'
}
