
from .db import Base, engine
from .modelcomplaint import Complaint


Base.metadata.create_all(engine)