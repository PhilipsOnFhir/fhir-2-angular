import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_InvoiceStatusEnum } from './R5_InvoiceStatusEnum'
import { R5_Invoice_LineItem } from './R5_Invoice_LineItem'
import { R5_Invoice_Participant } from './R5_Invoice_Participant'
import { R5_Invoice_PriceComponent } from './R5_Invoice_PriceComponent'
import { R5_Money } from './R5_Money'
import { R5_Reference } from './R5_Reference'

export class R5_Invoice      extends R5_DomainResource
{

   static def : string = 'Invoice';
   identifier : R5_Identifier [];
   status : R5_InvoiceStatusEnum ;
   cancelledReason : string ;
   type : R5_CodeableConcept ;
   subject : R5_Reference ;
   recipient : R5_Reference ;
   date : string ;
   participant : R5_Invoice_Participant [];
   issuer : R5_Reference ;
   account : R5_Reference ;
   lineItem : R5_Invoice_LineItem [];
   totalPriceComponent : R5_Invoice_PriceComponent [];
   totalNet : R5_Money ;
   totalGross : R5_Money ;
   paymentTerms : string ;
   note : R5_Annotation [];
}
