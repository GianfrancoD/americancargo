from sqlalchemy import Column, String, Integer, Text
from .db import Base

# Clases para la creacion de tablas

class Complaint(Base):
    __tablename__ = 'add_complaint'
    id = Column(Integer, primary_key=True)  
    claim_title = Column(String(100), nullable=False)  
    name = Column(String(100), nullable=False)  
    tracking_number = Column(String(50), nullable=False)  
    nationality = Column(String(50), nullable=False)  
    complaint = Column(Text, nullable=False)  

    def __repr__(self):
        return f'<Complaint {self.id}>'