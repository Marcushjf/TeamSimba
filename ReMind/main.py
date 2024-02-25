from token_1 import BOT_USERNAME, TOKEN
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes, CallbackContext, CallbackQueryHandler
import spr

conversation_history = None
# Commands
    
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('Help')

async def custom_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('custom')

# Responses
    
def test_response(text: str, history:str):
    proccessed: str = text.lower()
    return spr.get_gpt_response(proccessed, history)
    
    
async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    global conversation_history
    message_type = update.message.chat.type
    text = update.message.text

    print(f'User ({update.message.chat.id}) in {message_type} : "{text}"')

    response, conversation_history = test_response(text, conversation_history)

    print('Bot: ', response)

    await update.message.reply_text(response)


async def error(update:Update, context:ContextTypes.DEFAULT_TYPE):
    print(f'Update {update} caused error {context.error}')

async def start_command(update: Update, context: CallbackContext):
    global conversation_history
    conversation_history = None
    await update.message.reply_text(f'Hi there {str(update.effective_user.full_name)}')


if __name__ == '__main__':
    print('starting bot')
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler('start', start_command))
    app.add_handler(CommandHandler('help', help_command))
    app.add_handler(CommandHandler('custom', custom_command))

    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    app.add_error_handler(error)

    print('polling')
    app.run_polling(poll_interval=2)