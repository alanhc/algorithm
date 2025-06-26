CC      := gcc
CFLAGS  := -Wall -Wextra -g
TARGET  := linked_list

SRCS    := main.c list.c
OBJS    := $(SRCS:.c=.o)

.PHONY: all clean run start

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) -o $@ $^

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(TARGET)

run: all
	./$(TARGET)

start:
	@$(MAKE) all
	@$(MAKE) run
