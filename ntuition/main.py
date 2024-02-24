
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes, CallbackContext, CallbackQueryHandler

# Commands
    
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('Help')

async def custom_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('custom')

# Responses
    
def test_response(text: str) -> str:
    proccessed: str = text.lower()

    if 'hi' in proccessed:
        return 'hi there'
    
    else:
        return '...'
    
async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    message_type = update.message.chat.type
    text:str = update.message.text

    print(f'User ({update.message.chat.id}) in {message_type} : "{text}"')

    response:str = test_response(text)

    print('Bot: ', response)

    await update.message.reply_text(response)

async def error(update:Update, context:ContextTypes.DEFAULT_TYPE):
    print(f'Update {update} caused error {context.error}')

async def start_command(update: Update, context: CallbackContext):
    keyboard = [
        [InlineKeyboardButton("Option A", callback_data='A')],
        [InlineKeyboardButton("Option B", callback_data='B')],
        [InlineKeyboardButton("Option C", callback_data='C')],
    ]

    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text('Choose an option:', reply_markup=reply_markup)


async def button_click(update: Update, context: CallbackContext):
    query = update.callback_query
    
    # Check if CallbackQuery is not None
    if query:
        choice = query.data

        print(f"User {update.effective_user.id} chose {choice}")

        await query.edit_message_text(text=f"You chose: {choice}")
    else:
        print("CallbackQuery is None")

if __name__ == '__main__':
    print('starting bot')
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler('start', start_command))
    app.add_handler(CommandHandler('help', help_command))
    app.add_handler(CommandHandler('custom', custom_command))

    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))
    app.add_handler(CallbackQueryHandler(button_click))

    app.add_error_handler(error)

    print('polling')
    app.run_polling(poll_interval=2)